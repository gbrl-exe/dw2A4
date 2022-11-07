import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List' 

describe('List Component', () => {
  it('should render list items', () => {
      const { getByText } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']}/>)

      expect(getByText('Diego')).toBeTruthy()
      expect(getByText('Rodz')).toBeTruthy()
      expect(getByText('Mayk')).toBeTruthy()
  })


  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]} />)

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    await userEvent.type(inputElement, 'Novo');
    await userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument()
    })
  });

  it('should be able to remove item to the list', async () => {
    const { 
        getByText, 
        getAllByText, 
        queryByText
    } = render(<List initialItems={['Diego']}/>)

    const removeButton = getAllByText('Remover')
    
    userEvent.click(removeButton[0])

    await waitFor(() => {
        expect(queryByText('Diego')).not.toBeTruthy()
    })
  });
});
