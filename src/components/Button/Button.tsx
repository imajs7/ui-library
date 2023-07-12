import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    mode: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
    children: string;
    size?: 'small' | 'medium' | 'large';
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { mode = 'primary', children, size = 'medium' } = props;

    const getTheme = () => {
        switch (mode) {
            case 'primary':
                return 'button--primary';
            case 'secondary':
                return 'button--secondary';
            case 'error':
                return 'button--error';
            case 'warning':
                return 'button--warning';
            case 'success':
                return 'button--success';
            default:
                return 'storybook-button--primary';
        }
    };

    const getSize = () => {
        switch (size) {
            case 'small':
                return 'button--small';
            case 'medium':
                return 'button--medium';
            case 'large':
                return 'button--large';
            default:
                return 'button--medium';
        }
    };

    const _style = [getTheme(), getSize()].join(' ');

    return (
        <button className={_style} {...props}>
            {children || 'Button'}
        </button>
    );
};
