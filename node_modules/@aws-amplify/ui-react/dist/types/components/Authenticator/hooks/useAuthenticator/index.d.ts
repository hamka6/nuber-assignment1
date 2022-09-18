import * as React from 'react';
import { AuthInterpreter, AuthMachineSend, AuthMachineState, AuthenticatorServiceFacade } from '@aws-amplify/ui';
export declare type AuthenticatorContextValue = {
    service?: AuthInterpreter;
};
/**
 * These are the "facades" that we provide, which contains contexts respective
 * to current authenticator state.
 */
export declare type AuthenticatorContext = AuthenticatorServiceFacade;
/**
 * These are internal xstate helpers to we share with `useAuthenticator`.
 *
 * TODO(breaking?): remove these internal contexts
 */
export declare type InternalAuthenticatorContext = {
    _state: AuthMachineState;
    _send: AuthMachineSend;
};
/**
 * Inspired from https://xstate.js.org/docs/packages/xstate-react/#useselector-actor-selector-compare-getsnapshot.
 *
 * Selector accepts current facade values and returns an array of
 * desired value(s) that should trigger re-render.
 */
export declare type Selector = (context: AuthenticatorContext) => Array<any>;
export interface UseAuthenticator extends AuthenticatorServiceFacade {
    /** @deprecated For internal use only */
    _send: InternalAuthenticatorContext['_send'];
    /** @deprecated For internal use only */
    _state: InternalAuthenticatorContext['_state'];
}
/**
 * AuthenticatorContext serves static reference to the auth machine service.
 *
 * https://xstate.js.org/docs/recipes/react.html#context-provider
 */
export declare const AuthenticatorContext: React.Context<AuthenticatorContextValue>;
export declare const Provider: ({ children, }: {
    children: React.ReactNode;
}) => JSX.Element;
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator/headless#useauthenticator-hook)
 */
export declare const useAuthenticator: (selector?: Selector) => UseAuthenticator;
