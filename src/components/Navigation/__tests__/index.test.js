// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const projects = [
  { name: 'photography porfolio', description: 'Portraits of beautiful landscapes and living beings' }
]
const mockCurrentProject = jest.fn();
const mockSetCurrentProject= jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav
      projects={projects}
      setCurrentProject={mockSetCurrentProject}
      currentProject={mockCurrentProject}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
  })

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav
      projects={projects}
      setCurrentProject={mockSetCurrentProject}
      currentProject={mockCurrentProject}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
})


describe('links are visible', () => {
  it('inserts text into the home link', () => {
    const { getByTestId } = render(<Nav
        projects={projects}
        setCurrentProject={mockSetCurrentProject}
        currentProject={mockCurrentProject}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})

describe('onClick events', () => {
  it('calls the click handler when clicked', () => {
    const { getByText } = render(<Nav
        projects={projects}
        setCurrentProject={mockSetCurrentProject}
        currentProject={mockCurrentProject}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
    fireEvent.click(getByText('About me'))
    fireEvent.click(getByText('Contact'))
    fireEvent.click(getByText('Resume'))

    expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
  });
})