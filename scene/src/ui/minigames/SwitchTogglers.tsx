

import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, UiEntity } from '@dcl/sdk/react-ecs'
import Base from './Base'

type SwitchTogglersProps = {
    visible: boolean
    states: boolean[]
    onToggle: () => void
    closeRequest?: () => void
}

type SwitchButtonProps = {
    disable: boolean
    onToggle: () => void
}

function SwitchButton({ disable, onToggle }: SwitchButtonProps): ReactEcs.JSX.Element {
    return (
        <Button
            value=""
            variant='primary'
            uiTransform={{ width: 80, height: 20, margin: 4 }}
            disabled={disable}
            onMouseDown={onToggle}
        />
    )
}

function SwitchTogglers({ visible, states, onToggle, closeRequest }: SwitchTogglersProps): ReactEcs.JSX.Element {
    if (states.length !== 12) {
        throw new Error('SwitchTogglers: states length must be 12')
    }

    return (
        <Base visible={visible} title='TURN EVERYTHING OFF' closeRequest={closeRequest}>
            {/* Label - Success */}
            <Label
                uiTransform={{
                    width: 13,
                    height: 13,
                    margin: { top: '0%', bottom: '0%', left: '50%', right: '50%' },
                    positionType: 'absolute',
                    position: { bottom: '0%', top: '80%', left: '0%' },
                }}
                fontSize={40}
                font='sans-serif'
                value={`SUCCESS: ${states.filter(value => value).length}/${states.length}`}
                color={Color4.Yellow()}
            />
            <UiEntity
                uiTransform={{
                    width: '100%',
                    height: 'auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* First Row of Buttons */}
                <UiEntity
                    uiTransform={{
                        width: '100%',
                        height: 'auto',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SwitchButton disable={states[0]} onToggle={() => { states[0] = true; onToggle() }} />
                    <SwitchButton disable={states[1]} onToggle={() => { states[1] = true; onToggle() }} />
                    <SwitchButton disable={states[2]} onToggle={() => { states[2] = true; onToggle() }} />
                    <SwitchButton disable={states[3]} onToggle={() => { states[3] = true; onToggle() }} />
                </UiEntity>
                {/* Second Row of Buttons */}
                <UiEntity
                    uiTransform={{
                        width: '100%',
                        height: 'auto',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SwitchButton disable={states[4]} onToggle={() => { states[4] = true; onToggle() }} />
                    <SwitchButton disable={states[5]} onToggle={() => { states[5] = true; onToggle() }} />
                    <SwitchButton disable={states[6]} onToggle={() => { states[6] = true; onToggle() }} />
                    <SwitchButton disable={states[7]} onToggle={() => { states[7] = true; onToggle() }} />
                </UiEntity>
                {/* Third Row of Buttons */}
                <UiEntity
                    uiTransform={{
                        width: '100%',
                        height: 'auto',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SwitchButton disable={states[8]} onToggle={() => { states[8] = true; onToggle() }} />
                    <SwitchButton disable={states[9]} onToggle={() => { states[9] = true; onToggle() }} />
                    <SwitchButton disable={states[10]} onToggle={() => { states[10] = true; onToggle() }} />
                    <SwitchButton disable={states[11]} onToggle={() => { states[11] = true; onToggle() }} />
                </UiEntity>
            </UiEntity>
        </Base>
    )
}




export default SwitchTogglers