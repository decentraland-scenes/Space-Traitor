import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Dropdown, Label, UiEntity } from '@dcl/sdk/react-ecs'
import { Player } from '../types'
import Base from './minigames/Base'

type VotingWidgetProps = {
    visible: boolean
    players: string[]
    lockConfirmOption: boolean
    votingLeft: number
    onSelectPlayer: (index: number) => void
    selectedUserId: string | null
    selectedIndex: number

    onConfirm: () => void
}

{/* Fix Icon - UI - timer*/ }
function VotingWidget({ visible, players, lockConfirmOption, onSelectPlayer, votingLeft, selectedUserId, selectedIndex, onConfirm }: VotingWidgetProps): ReactEcs.JSX.Element {
    return (
        <Base title='Time To Vote' visible={visible}>
            <UiEntity uiTransform={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Label
                    uiTransform={{
                        height: 13,
                        margin: 10
                    }}
                    fontSize={20}
                    font='sans-serif'
                    value={"Who's the traitor?"}
                    color={Color4.White()}
                />
                <UiEntity
                    uiTransform={{
                        width: 64,
                        height: 64,
                        margin: 20
                    }}
                    // PUT avatar texture
                    uiBackground={
                        selectedUserId !== null ? 
                        {
                            textureMode: 'stretch',
                            avatarTexture: {
                                userId: selectedUserId,
                            },
                        } : {}
                    }
                />
                {/* Label - Waiting for others players */}
                <Label
                    uiTransform={{
                        height: 20,
                        margin: 10,
                    }}
                    fontSize={20}
                    font='sans-serif'
                    value={lockConfirmOption ? "You've already casted your vote. \n Waiting for others to vote" : 'Cast your vote'}
                    color={lockConfirmOption ? Color4.Red() : Color4.White()}
                />
                {/* Label - Time */}
                <Label
                    uiTransform={{
                        height: 20,
                        margin: 10,
                    }}
                    fontSize={20}
                    font='sans-serif'
                    value={`Voting time left: ${votingLeft}`}
                    color={Color4.White()}
                />
                <UiEntity uiTransform={{alignItems: 'center'}}>
                    {/* Dropdown - Players*/}
                    <Dropdown
                        options={players}
                        selectedIndex={selectedIndex}
                        onChange={onSelectPlayer}
                        uiTransform={{
                            width: '400px',
                            height: '40px',
                            position: { right: "0%", bottom: 0 },
                        }}

                    />
                    {/* Button - Confirm*/}
                    <Button
                        value={'CONFIRM'}
                        variant='primary'
                        uiTransform={{
                            width: 100,
                            height: 40,
                            margin: 4,
                        }}
                        disabled={lockConfirmOption}
                        uiBackground={{
                            textureMode: 'center',
                        }}
                        onMouseDown={() => {
                            if (selectedUserId === null) {
                                return
                            }
                                onConfirm()
                            }
                        }
                    />
                </UiEntity>
            </UiEntity>
        </Base>
    )
}

export default VotingWidget

