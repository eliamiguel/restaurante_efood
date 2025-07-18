import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'
import { ButtonNormal } from '../../Buttom/styles'

export const Overley = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  justify-content: flex-end;
`

export const InputGroup = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  margin-bottom: 8px;
  margin-top: 8px;
  outline: 2px solid ${cores.rosa};
`

export const FormPayment = styled.div`
  z-index: 1;
  background-color: ${cores.rosa};
  width: 360px;
  padding: 0 8px;

  div {
    width: 345px;
    margin-bottom: 10px;
    @media (max-width: ${breakpoint.tablet}) {
      width: 100%;
    }
  }

  ${ButtonNormal} {
    margin-top: 8px;
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
  }
`

export const Title = styled.h3`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  color: ${cores.branco};
  font-weight: bold;
`

export const Label = styled.label`
  display: block;
  color: ${cores.branco};
  font-weight: bold;
  font-size: 14px;
`

export const InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;

  div {
    flex: 1;
  }

  @media (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    gap: 0;
  }
`

export const TotalValue = styled.div`
  color: ${cores.branco};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`
