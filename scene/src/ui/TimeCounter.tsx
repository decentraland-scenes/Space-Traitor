import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, UiEntity } from '@dcl/sdk/react-ecs'
import { playerIsTraitor } from '../entities/SpaceShip'

type TimeCounterProps = {
    visible: boolean
    text: string
}

{/* Fix Icon - UI - timer*/ }
function TimeCounter({ visible, text }: TimeCounterProps): ReactEcs.JSX.Element {
    return (
        <UiEntity
            uiTransform={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                positionType: 'absolute',
                position: { right: "5%", bottom: '45%' },
                display: visible ? 'flex' : 'none',
            }}
        >
            <UiEntity
                uiTransform={{
                    width: '217',
                    height: '105',
                }}
                uiBackground={{
                    textureMode: 'center',
                    texture: {
                        src: 'images/ui-counter-2.png',
                    },
                }}
            >
                <Label
                    uiTransform={{
                        width: '100%',
                        height: '100%'
                    }}
                    value={text}
                    color={Color4.Black()}
                    fontSize={37}
                />
            </UiEntity>

            {/* Fix Icon - UI*/}
            { playerIsTraitor && 
                <UiEntity
                    uiTransform={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        positionType: 'absolute',
                        position: { right: "100%", bottom: '2%' },
                    }}
                >
                    <UiEntity
                        uiTransform={{
                            width: '100px',
                            height: '100px',
                        }}
                        uiBackground={{
                            textureMode: 'stretch',
                            texture: {
                                src: 'images/robot2.png',
                            },
                        }}
                    >
                        <Label uiTransform={{width: '100%'}} value={`You're the traitor`} color={Color4.Black()} textAlign='bottom-center' fontSize={12} />
                    </UiEntity>
                </UiEntity>
            }
        </UiEntity>
    )
}

export default TimeCounter
