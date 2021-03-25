function mockRouter() {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter')
  useRouter.mockImplementationOnce(() => ({
    pathname: '',
  }))
}

export { mockRouter }