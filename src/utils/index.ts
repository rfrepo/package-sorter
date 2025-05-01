import {
    BULKY_DIMENSION_THRESHOLD,
    BULKY_VOLUME_THRESHOLD,
    CATEGORY_REJECTED,
    CATEGORY_SPECIAL,
    CATEGORY_STANDARD,
    HEAVY_MASS_THRESHOLD,
    INVALID_ARGUMENTS_ERROR,
    INVALID_INPUT_ERROR,
    REQUIRED_ARGUMENT_COUNT
} from '../constants'


export const validateInputLength = (inputs: unknown[] = []): string | undefined => {
    const inputsWithoutUndefinedOrNull = inputs.filter(input => input !== undefined || input === null)

    if (inputsWithoutUndefinedOrNull.length !== REQUIRED_ARGUMENT_COUNT) {
        return INVALID_ARGUMENTS_ERROR
    }
}

const checkInputIsValid = (input: unknown): boolean => typeof input === 'number' && !isNaN(input)

export const validateInputs = (inputs: unknown[] = []): string | undefined => {
    if (!inputs.every(checkInputIsValid)) {
        return INVALID_INPUT_ERROR
    }
}

export const calculateVolume = (width: number, height: number, length: number): number => width * height * length


export const isBulky = (volume: number, width: number, height: number, length: number): boolean => (
    volume >= BULKY_VOLUME_THRESHOLD ||
    length >= BULKY_DIMENSION_THRESHOLD ||
    width >= BULKY_DIMENSION_THRESHOLD ||
    height >= BULKY_DIMENSION_THRESHOLD
)


export const isHeavy = (mass: number): boolean =>
    mass >= HEAVY_MASS_THRESHOLD

export const determineCategory = (bulky: boolean, heavy: boolean): string => {
    if (bulky && heavy) return CATEGORY_REJECTED

    if (bulky || heavy) return CATEGORY_SPECIAL
    else return CATEGORY_STANDARD

}
