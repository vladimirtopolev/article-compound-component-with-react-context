import React from 'react';

import Accordion from './components/AccordionWithReactContext/Accordion';

function App() {
    return (
        <div className="App">
            <Accordion>
                <Accordion.Item id="1">
                    <Accordion.Header>Item1</Accordion.Header>
                    <Accordion.Content>
                        Content of Item 1
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item id="2">
                    <Accordion.Header>Item2</Accordion.Header>
                    <Accordion.Content>
                        Content of Item2
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default App;
