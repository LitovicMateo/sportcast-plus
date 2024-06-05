"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "@/app/actions/loginAction";

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button disabled={status.pending}>
      {status.pending ? "Loading..." : "Login"}
    </button>
  );
}

export default function Login() {
  const [state, formAction] = useFormState(loginAction, { error: undefined });

  return (
    <div className="flex h-lvh w-full items-center justify-center">
      <form
        action={formAction}
        className="h-[400px] rounded-md bg-gray-300 px-4 py-2 flex flex-col justify-center gap-8 items-center"
      >
        <div>
          <fieldset className="grid grid-col-2">
            <label htmlFor="usernameEmail">Username</label>
            <input type="name" name="usernameEmail" />
          </fieldset>

          <fieldset className="grid grid-col-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </fieldset>
        </div>

        <SubmitButton />

        {state.error && (
          <p dangerouslySetInnerHTML={{ __html: state.error }}></p>
        )}
      </form>
    </div>
  );
}
