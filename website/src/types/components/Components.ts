import { DragEvent, MouseEventHandler } from 'react';
import * as React from 'react';

/* ==================== Common Component ==================== */
// Button
export type ButtonType = {
    text?: string | JSX.Element;
    color?: string;
    width?: string;
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// CheckBox Input
export interface CheckBoxInputItemInterface {
    value: string | number | undefined;
    lable: string | undefined;
}
export interface CheckBoxInputInterface {
    lableFiled: string;
    name: string;
    formik: any;
    checkboxData: CheckBoxInputItemInterface[] | undefined;
}
// Imsge
export interface ImageType {
    width: number | undefined;
    height: number | undefined;
    src: string | undefined;
    alt: string | undefined;
    className?: string;
    title?: string;
}

// Input
export interface InputItem {
    label: string;
    name: string;
    formik: any;
    type?: string;
    placeholder?: string;
}

// PopUp
export interface PopUpImageUploaderInterface {
    onDragEnter: (e: DragEvent<HTMLDivElement>) => void;
    onDragLeave: (e: DragEvent<HTMLDivElement>) => void;
    onDragOver: (e: DragEvent<HTMLDivElement>) => void;
    onDrop: (e: DragEvent<HTMLDivElement>) => void;
    showAddSection: boolean;
    isDragging: boolean;
    uploderInput: React.MutableRefObject<HTMLInputElement | null>;
    allowedFileType: String[];
    removeImage: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
    addImage: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
    image: any;
    setShowAddSection: React.Dispatch<React.SetStateAction<boolean>>;
}

/* ==================== Base Component ==================== */
// Image Uploader
export interface ImageUploaderItem {
    isEditPage?: boolean;
    formik: any;
}
export interface DisplayImageUploaderInterface {
    onDragEnter: (e: DragEvent<HTMLDivElement>) => void;
    onDragLeave: (e: DragEvent<HTMLDivElement>) => void;
    onDragOver: (e: DragEvent<HTMLDivElement>) => void;
    onDrop: (e: DragEvent<HTMLDivElement>) => void;
    isDragging: boolean;
    removeImage: MouseEventHandler<HTMLDivElement>;
    image: any;
    setShowAddSection: React.Dispatch<React.SetStateAction<boolean>>;
}
