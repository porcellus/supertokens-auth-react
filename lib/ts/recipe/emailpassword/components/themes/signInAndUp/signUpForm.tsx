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
import { SignUpThemeProps } from "../../../types";

import FormBase from "../../library/formBase";
import { withOverride } from "../../../../../components/componentOverride/withOverride";

/*
 * Component.
 */

export const SignUpForm = withOverride(
    "EmailPasswordSignUpForm",
    function EmailPasswordSignUpForm(
        props: SignUpThemeProps & {
            header?: JSX.Element;
            footer?: JSX.Element;
        }
    ): JSX.Element {
        return (
            <FormBase
                formFields={props.formFields}
                clearError={props.clearError}
                onError={props.onError}
                buttonLabel={"EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN"}
                onSuccess={props.onSuccess}
                callAPI={(formFields) =>
                    props.recipeImplementation.signUp({
                        formFields,
                        config: props.config,
                    })
                }
                validateOnBlur={true}
                showLabels={true}
                footer={props.footer}
            />
        );
    }
);
