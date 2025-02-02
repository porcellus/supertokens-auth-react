/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/*
 * Imports.
 */

/** @jsx jsx */
import { jsx } from "@emotion/react";

import { useContext } from "react";
import { useTranslation } from "../../../..";
import StyleContext from "../../../../styles/styleContext";
/*
 * Props.
 */

type ButtonProps = {
    label: string;
    isLoading: boolean;
    disabled?: boolean;
    type: "submit" | "button" | "reset" | undefined;
    onClick?: () => void;
};

/*
 * Component.
 */

export default function Button({ type, label, disabled, isLoading, onClick }: ButtonProps): JSX.Element {
    const t = useTranslation();
    const styles = useContext(StyleContext);

    if (disabled === undefined) {
        disabled = false;
    }
    return (
        <button type={type} disabled={disabled} onClick={onClick} css={styles.button} data-supertokens="button">
            {t(label)}
            {isLoading && "..."}
        </button>
    );
}
