
import React, { useState } from "react";
import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem } from "./styles";

function DropDown(props: any) {
    const { header, options, onSelection } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: any) => {
      onSelection(value);
      setIsOpen(false);
    };

    return (
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{header}</DropDownHeader>
        {isOpen && (
            <DropDownListContainer>
                <DropDownList>
                    {options.map((option: any) => (
                      <ListItem onClick={() => onOptionClicked(option)} key={Math.random()}>
                        {option}
                      </ListItem>
                    ))}
              </DropDownList>
            </DropDownListContainer>
        )}
      </DropDownContainer>
    );
}

export default DropDown;
