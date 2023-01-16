import { render, waitFor } from '@testing-library/react';
import { PinInput } from '../index';

describe('PinInput', () => {
  it('matches snapshot with default value', async () => {
    const { baseElement } =
      render(<PinInput
        defaultValue='12'
      />)
    // eslint-disable-next-line testing-library/no-wait-for-snapshot
    await waitFor(() => expect(baseElement).toMatchSnapshot())
  })
  it('matches snapshot with secret mode', async () => {
    const { baseElement } =
      render(<PinInput
        defaultValue='12'
        isSecretMode
      />)
    // eslint-disable-next-line testing-library/no-wait-for-snapshot
    await waitFor(() => expect(baseElement).toMatchSnapshot())
  })
})

