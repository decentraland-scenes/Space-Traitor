

import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Input, Label, UiEntity } from '@dcl/sdk/react-ecs'
import Base from './Base'

type WordTyperProps = {
    visible: boolean
    currentChallengeWord: string

    currentValue: string
    onValueChange: (value: string) => void

    onSuccess: () => void
    successScore: number
    successNeeded: number
    closeRequest?: () => void
}

function WordTyper({ visible, currentChallengeWord, onSuccess, successNeeded, successScore, onValueChange, currentValue, closeRequest }: WordTyperProps): ReactEcs.JSX.Element {
    return (
        <Base visible={visible} title={`TYPE THE NEXT WORD: \n ${currentChallengeWord}`} closeRequest={closeRequest}>
            {/* Input - Word */}
            <Input
                uiTransform={{
                    position: {
                        left: '0%',
                        top: '20%',
                    },
                    width: '300px',
                    height: '70px',
                }}
                textAlign='middle-center'
                fontSize={18}
                placeholder={'Type Word Here'}
                color={Color4.White()}
                placeholderColor={Color4.Gray()}
                onSubmit={(value: string) => {
                    if (value.localeCompare(currentChallengeWord) === 0) {
                        onSuccess()
                    }
                }}
                value={currentValue}
                onChange={(value: string) => {
                    onValueChange(value)
                }}
            ></Input>
            <Button value='Submit' variant="primary" onMouseDown={() => {
                if (currentValue.localeCompare(currentChallengeWord) === 0) {
                    onSuccess()
                }
            }} />
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
                value={"SUCCESS: " + successScore + "/" + successNeeded}
                color={Color4.Yellow()}
            />
        </Base>
    )
}

export default WordTyper