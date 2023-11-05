import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { loginActions } from '../..';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { useSelector } from 'react-redux';
import { loginByUserEmail } from '../../model/services/loginByUserEmail/loginByUserEmail';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  // const { email, password } = useSelector(getLoginState);

  const handleEmailChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserEmail(value));
    },
    [dispatch],
  );
  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserPassword(value));
    },
    [dispatch],
  );
  const submit = useCallback(() => {
    // dispatch(loginByUserEmail({ email, password }));
  }, [dispatch]);
  return (
    <form onSubmit={submit}>
      <div>
        <InputLabel
          htmlFor="email"
          value="Email"
        />

        <TextInput
          id="email"
          type="email"
          name="email"
          // value={email}
          className="mt-1 block w-full"
          autoComplete="username"
          isFocused={true}
          onChange={(e) => handleEmailChange(e.target.value)}
        />

        {/* <InputError
          message={errors.email}
          className="mt-2"
        /> */}
      </div>

      <div className="mt-4">
        <InputLabel
          htmlFor="password"
          value="Password"
        />

        <TextInput
          id="password"
          type="password"
          name="password"
          // value={password}
          className="mt-1 block w-full"
          autoComplete="current-password"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />

        {/* <InputError
          message={errors.password}
          className="mt-2"
        /> */}
      </div>

      {/* <div className="block mt-4">
        <label className="flex items-center">
          <Checkbox
            name="remember"
            checked={data.remember}
            onChange={(e) => setData('remember', e.target.checked)}
          />
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>
      </div> */}

      <div className="flex items-center justify-end mt-4">
        {/* {canResetPassword && (
          <Link
            href={route('password.request')}
            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Forgot your password?
          </Link>
        )} */}

        <PrimaryButton className="ml-4">Log in</PrimaryButton>
      </div>
    </form>
  );
};
