// En styles.ts
import styled from 'styled-components';

interface SectionContentProps {
  size: 'normal' | 'expanded';
}

export const SectionContent = styled.div<SectionContentProps>`
  /* ... (código existente) */
  height: ${(props) => (props.size === 'expanded' ? 'calc(100% - 135px)' : '100%')};
`;
