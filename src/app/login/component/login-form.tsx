import { FC } from "react";
import ActionButton from "@/components/buttons/action-button";

interface LoginFormProps {
  handleLoginWithGoogle: () => void,
  handleLoginWithEmail: () => void,
}

const LoginForm: FC<LoginFormProps> = ({
  handleLoginWithGoogle,
  handleLoginWithEmail
}) => {
  return (
    <div className="w-[360px] min-h-[490px] rounded border-[1px]">
      <div className='h-full flex flex-col p-10 justify-between'>
        <div className='grid gap-2 justify-stretch'>
          <div className='text-lg font-semibold mb-2'>Login to Reads</div>
          <div className='w-full'>
            <div className='text-xs'>or</div>
            <ActionButton
              onClick={handleLoginWithGoogle}
              buttonText='Continue with Apple'
              type='contained'
            />
            <ActionButton
              onClick={handleLoginWithEmail}
              buttonText='Continue with Google'
              type='contained'
            />
          </div>
        </div>
        <div className='footer'>
          <div className='text-xs'>{`By continuing, you agree to Reads's Terms of Service and acknowledge you've read our Privacy Policy`}</div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
