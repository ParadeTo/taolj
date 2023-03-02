import {gql, useMutation, useQuery} from '@apollo/client'
import {Button, Form, Input} from 'antd-mobile'
import {useEffect} from 'react'

interface LoginParam {
  username: string
  password: string
}

function Login() {
  const [login, {data, loading, error}] = useMutation<
    {login: string},
    LoginParam
  >(
    gql`
      mutation LoginMutation($username: String!, $password: String!) {
        login(username: $username, password: $password)
      }
    `
  )

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.login)
      console.log(data)
    }
  }, [data])

  const onFinish = async (values: LoginParam) => {
    login({variables: values})
  }
  return (
    <Form
      name='form'
      onFinish={onFinish}
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }>
      <Form.Header>Login</Form.Header>
      <Form.Item name='username' label='Username' rules={[{required: true}]}>
        <Input placeholder='Please input username' />
      </Form.Item>
      <Form.Item name='password' label='Password' rules={[{required: true}]}>
        <Input type='password' placeholder='Please input password' />
      </Form.Item>
    </Form>
  )
}

export default Login
