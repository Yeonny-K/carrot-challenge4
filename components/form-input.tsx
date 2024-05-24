import {ReactNode} from 'react';

//⭐타입스크립트라서 문법 정의 필요
interface FormInputProps{
    type: string;
    placeholder: string;
    required: boolean;
    errors?: string[];
    name: string;
    children?: ReactNode;
}

//⭐FormInput 이라는 커스텀 컴포넌트 만들기
//커스텀 필요한 부분들이 type, placeholder, required, errors(에러가 여러 개일 수 있어서) 이므로 인자로 처리
//errors는 배열이므로 하나씩 span으로 뜨도록 map 처리
export default function FormInput({type, placeholder, required, errors = [], name, children}: FormInputProps){
    return (
        <div className="flex flex-col gap-2">
            <div className="relative flex items-center">
                {children && <span className="absolute left-3 flex items-center pointer-events-none">{children}</span>}
                    <input 
                    name={name}
                    className="bg-transparent rounded-full
                    w-full h-10 focus:outline-none ring-2
                    focus:ring-4 transition ring-neutral-200 
                    focus:ring-neutral-300 border-none
                    placeholder:text-neutral-400
                    pl-9
                    "    
                    type={type}
                    placeholder={placeholder}
                    required={required} />
                    </div>
                    {errors.map((error,index)=> (
                        <span key={index} className="text-red-500 font-medium">{error}</span>
                    ))}
                </div>
    )
}