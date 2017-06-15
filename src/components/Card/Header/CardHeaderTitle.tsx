import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export function CardHeaderTitle(props: React.HTMLProps<HTMLParagraphElement>) {
    const className = classNames('card-header-title', props.className);

    return (
        <p {...props} className={className} />
    )
}

export default withHelpersModifiers(CardHeaderTitle);