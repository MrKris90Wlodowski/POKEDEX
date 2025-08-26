import Button from "../shared/Button"
import Input from "../shared/Input"
import Wrapper from "../shared/Wrapper"
import Form from "../shared/Form"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({});

const RegisterForm = () => {
    return (
        <Wrapper>
            <Form>
                <Input id="name" name="name" type="text">NAME:</Input>
                <Input id="email" name="email" type="email">EMAIL:</Input>
                <Input id="password" name="password" type="password">PASSWORD:</Input>
                <Input id="confirmPassword" name="confirmPassword" type="password">CONFIRM PASSWORD:</Input>
                <Button type="submit">REGISTER</Button>
            </Form>
        </Wrapper>
    )
}

export default RegisterForm