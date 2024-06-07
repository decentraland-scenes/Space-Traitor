

import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, UiEntity } from '@dcl/sdk/react-ecs'
import Base from './Base'

type BugClickerProps = {
    visible: boolean
    onSuccess: () => void
    successScore: number
    successNeeded: number
    topBugPosition: number
    leftBugPosition: number
    closeRequest?: () => void
}

function BugClicker({ visible, topBugPosition, leftBugPosition, successNeeded, successScore, onSuccess, closeRequest }: BugClickerProps): ReactEcs.JSX.Element {
    return (
        <Base visible={visible} title='Bug Clicker' closeRequest={closeRequest}>
            {/* Button - Bug */}
            <Button
                value='bug'
                variant="primary"
                uiTransform={{
                    width: 30,
                    height: 30,
                    position: { bottom: '0%', top: topBugPosition, left: leftBugPosition },
                    positionType: 'absolute'

                }}
                onMouseDown={onSuccess}
            />
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
                value={`Success: ${successScore}/${successNeeded}`}
                color={Color4.Yellow()}
            />
        </Base>
    )
}

export default BugClicker