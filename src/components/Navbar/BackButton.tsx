import styled from 'styled-components'
import {useAppDispatch} from '../../app/hooks'
import {setCountry} from '../../slices/Global'
import { ReactComponent as Arrow } from '../../svgs/arrowLeft.svg'

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid hsla(0,0%,0%,.1);
  width: 150px;
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5em var(--content-horizontal-offset);
  background: var(--main-elements-color);
  color: var(--main-text-color);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 5px solid hsla(0,0%,0%,.6);
  }
  svg {
    width: 30px;
    height: auto;
    margin-right: .6em;
  }

`

const BackButton = () => {
  const dispatch = useAppDispatch()

  return <StyledBtn
      onClick={()=>dispatch(setCountry(null))}>
    <Arrow />
     Back
    </StyledBtn>
}

export default BackButton
