import styled from "styled-components";

export const LoginSection = styled.section``;
export const AuthForm = styled.form`
    margin-top: 2rem;
    background-color: var(--primary-color);
    padding: 40px;
    border-radius: 5px;
    input[type='file']{
        color: var(--primary-color);
        cursor: pointer;
    }
    .login_btn{
        background: #fff;
        color: var(--primary-color);
        font-weight: 600;
    }
    p {
        a {
            color: #fff;
        }
    }
`;