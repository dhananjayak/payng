
export type Option = OptionText | OptionValue | OptionTextValue

export interface OptionTextValue {
    text: string;
    value: string;
}

export interface OptionText {
    text: string;
}

export interface OptionValue {
    value: string
}