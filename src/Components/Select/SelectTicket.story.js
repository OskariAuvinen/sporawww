import React from 'react';
import styled from 'styled-components';

import { Select, Fieldset } from 'react95';



const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
  fieldset,
  fieldset {
    margin-bottom: 2rem;
  }
  legend + * {
    margin-bottom: 1rem;
  }
  #default-selects {
    width: 200px;
  }
  #cutout > div {
    width: 250px;
    padding: 1rem;
    background: ${({ theme }) => theme.canvas};
    & > p {
      margin-bottom: 2rem;    }
  }
`;

export default {
  title: 'Select',
  component: Select,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export function SelectTicket( { ticketType, handleTicketOption, ticketOptions }) {
  return (
    <div id='default-selects'>
      <Fieldset label='Tuotevalinta'>
       <Select
          defaultValue={ticketType[0]}
          options={ticketOptions}
          menuMaxHeight={160}
          width={160}
          onChange={handleTicketOption}
        />
      </Fieldset>
    </div>
  );
}

SelectTicket.story = {
  name: 'SelectTicket'
};

export function CustomDisplayFormatting( { ticketType, handleTicketOption, ticketOptions } ) {
  return (
    <Select
      formatDisplay={opt => `${opt.label.toUpperCase()} 👍 👍`}
      onChange={handleTicketOption}
      options={ticketOptions}
      width={220}
    />
      );
}

CustomDisplayFormatting.story = {
  name: 'custom display formatting'
};