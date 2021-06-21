import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import EightBall from './EightBall';

test('it renders without crashing', () => {
    render(<EightBall/>);
});

test('should match snapshot', () => {
    const {asFragment} = render(<EightBall />);
    expect(asFragment()).toMatchSnapshot()
});

test('text should have the right class', () => {
    const { getByText, queryByText } = render(<EightBall />);
    //example of a non exact match
    expect(getByText('Question', { exact: false })).toHaveClass('EightBall-text');

    expect(getByText('Think Of a Question')).toHaveClass('EightBall-text');
    expect(getByText('Think Of a Question')).toBeInTheDocument();
});


test('when eightball clicked, text changes', () => {
    const { getByText, queryByText } = render(<EightBall />);
    const button = getByText('Think Of a Question');
    fireEvent.click(button);
    expect(button).not.toHaveTextContent("Think Of a Question");
});