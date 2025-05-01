import {calculateVolume, determineCategory, isBulky, isHeavy, validateInputLength, validateInputs} from '../utils'

export const sort = (width: number, height: number, length: number, mass: number): string => {
    const inputs: unknown[] = [width, height, length, mass]

    const inputLengthErrorMsg = validateInputLength(inputs)

    if (inputLengthErrorMsg) {
        throw new Error(inputLengthErrorMsg)
    }

    const inputValidationErrorMsg = validateInputs(inputs)

    if (inputValidationErrorMsg) {
        throw new Error(inputValidationErrorMsg)
    }

    const volume = calculateVolume(width, height, length)

    const bulky = isBulky(volume, width, height, length)

    const heavy = isHeavy(mass)

    return determineCategory(bulky, heavy)
}
