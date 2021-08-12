import {createContext, useState, ReactNode, Dispatch, SetStateAction, useContext} from 'react';
import styles from './Accordion.module.css';

type AccordionContextProps = {
    activeItem: string | null,
    setActiveItem: Dispatch<SetStateAction<string | null>>
};

type AccordionItemContextProps = {
    id: string
}

const AccordionContext = createContext({} as AccordionContextProps);
const AccordionItemContext = createContext({} as AccordionItemContextProps);

const Accordion = ({children}: { children: ReactNode }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    return (
        <AccordionContext.Provider value={{
            activeItem,
            setActiveItem
        }}>
            <div className={styles.Accordion}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

Accordion.Item = ({children, id}: { children: ReactNode, id: string }) => {
    return (
        <AccordionItemContext.Provider value={{id}}>
            <div className={styles.Accordion__item}>{children}</div>
        </AccordionItemContext.Provider>
    );
};

Accordion.Header = function Header({children}: { children: ReactNode }) {
    const {setActiveItem} = useContext(AccordionContext);
    const {id} = useContext(AccordionItemContext);
    return (
        <div className={styles.Accordion__header} onClick={() => setActiveItem(id)}>{children}</div>
    );
};

Accordion.Content = function Content({children}: { children: ReactNode }) {
    const {activeItem} = useContext(AccordionContext);
    const {id} = useContext(AccordionItemContext);
    return activeItem === id ? <div className={styles.Accordion__content}>{children}</div> : null;
};
export default Accordion;