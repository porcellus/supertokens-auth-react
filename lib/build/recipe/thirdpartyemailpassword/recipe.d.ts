/// <reference types="react" />
import AuthRecipeWithEmailVerification from "../authRecipeWithEmailVerification";
import { CreateRecipeFunction } from "../../types";
import {
    Config,
    GetRedirectionURLContext,
    NormalisedConfig,
    PreAPIHookContext,
    OnHandleEventContext,
    UserInput,
    RecipeInterface,
} from "./types";
import EmailPassword from "../emailpassword/recipe";
import ThirdParty from "../thirdparty/recipe";
import EmailVerification from "../emailverification/recipe";
export default class ThirdPartyEmailPassword extends AuthRecipeWithEmailVerification<
    GetRedirectionURLContext,
    PreAPIHookContext,
    OnHandleEventContext,
    NormalisedConfig
> {
    static instance?: ThirdPartyEmailPassword;
    static RECIPE_ID: string;
    emailPasswordRecipe: EmailPassword | undefined;
    thirdPartyRecipe: ThirdParty | undefined;
    recipeImpl: RecipeInterface;
    constructor(
        config: Config,
        recipes: {
            emailVerificationInstance: EmailVerification | undefined;
            thirdPartyInstance: ThirdParty | undefined;
            emailPasswordInstance: EmailPassword | undefined;
        }
    );
    getFeatures: () => Record<string, import("../../types").ComponentWithRecipeAndMatchingMethod>;
    getDefaultRedirectionURL: (context: import("../emailpassword").GetRedirectionURLContext) => Promise<string>;
    getFeatureComponent: (componentName: "emailverification" | "signinup" | "resetpassword", props: any) => JSX.Element;
    static init(
        config: UserInput
    ): CreateRecipeFunction<GetRedirectionURLContext, PreAPIHookContext, OnHandleEventContext, NormalisedConfig>;
    static getInstanceOrThrow(): ThirdPartyEmailPassword;
    static reset(): void;
}
