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

import React, { useContext } from "react";
import StyleContext from "../../../styles/styleContext";

export default function SignUpFooter({
    termsOfServiceLink,
    privacyPolicyLink
}: {
    privacyPolicyLink?: string;
    termsOfServiceLink?: string;
}): JSX.Element | null {
    const styles = useContext(StyleContext);

    if (termsOfServiceLink === undefined && privacyPolicyLink === undefined) {
        return null;
    }

    return (
        <div
            data-supertokens="secondaryText privacyPolicyAndTermsAndConditions"
            css={[styles.secondaryText, styles.privacyPolicyAndTermsAndConditions]}>
            By signing up, you agree to our
            {termsOfServiceLink !== undefined && (
                <a data-supertokens="link" css={styles.link} target="_blank" href={termsOfServiceLink}>
                    Terms of Service
                </a>
            )}
            {termsOfServiceLink !== undefined && privacyPolicyLink !== undefined && "and"}
            {privacyPolicyLink !== undefined && (
                <a data-supertokens="link" css={styles.link} href={privacyPolicyLink} target="_blank">
                    Privacy Policy
                </a>
            )}
        </div>
    );
}
