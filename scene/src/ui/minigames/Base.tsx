

import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, UiEntity } from '@dcl/sdk/react-ecs'

type BaseProps = {
    title: string
    visible: boolean
    children?: ReactEcs.JSX.Element[]
    closeRequest?: () => void
}

function Base({ visible, title, children, closeRequest }: BaseProps): ReactEcs.JSX.Element {
    return (
        <UiEntity
            uiTransform={{
                display: visible ? 'flex' : 'none',
                width: '100%',
                height: '100%',
                position: { top: 0, left: 0 },
                positionType: 'absolute'
            }}
        >
            <UiEntity
                uiTransform={{
                    width: 800,
                    height: 600,
                    margin: '10% 50px 50% 30%',
                    position: { top: '0%' },
                    padding: { top: 4, bottom: 4, left: 4, right: 4 },
                    pointerFilter: 'block',
                    flexDirection: 'column',
                }}
                uiBackground={{
                    color: Color4.fromHexString('#342E39'),
                    textureMode: 'stretch'
                }}
            >
                <UiEntity uiTransform={{ width: '100%', height: '300px', flexDirection: 'column'}}>
                    <Button uiTransform={{ alignSelf: 'flex-end', width: 100 }} value='CLOSE' onMouseDown={closeRequest} />
                    <Label
                        uiTransform={{
                            margin: { top: 50 },
                            width: '100%',
                        }}
                        textAlign='middle-center'
                        fontSize={40}
                        font='sans-serif'
                        value={title}
                        color={Color4.Green()}
                    />
                </UiEntity>
                

                <UiEntity uiTransform={{ width: '100%', height: '500px', alignItems: 'center', justifyContent: 'center' }}>
                    {children}
                </UiEntity>
            </UiEntity>
        </UiEntity>
    )
}

export default Base