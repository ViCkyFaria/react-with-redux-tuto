import styled from 'styled-components'

export const Textarea = styled.textarea`
  background: transparent;
  width: 100%;
  margin-top: 5px;
  border-radius: unset;
  border: solid 2px #09d3ac;
  color: #09d3ac;
  resize: none;
  padding: 5px;
`

export const Label = styled.label`
  color: #09d3ac;
  padding: none;
  margin-right: 5px;
`

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`