import {
    SectiionWrapper,
    SalesSection,
    SalesInfo,
    SalesTitle,
    CalendarContainer,
    SalesContent,
    Combined,
    Refreshments,
    Water
} from "./styles.ts";



/*interface SalesLayoutProps {
  contentSize: 'normal' | 'expanded';
}
export const SalesLayout: React.FC<SalesLayoutProps> = ({ contentSize }) => {
    const data = [
        { id: 1, item: 'Combinados', price: '2.484.000€', color: 'rgba(255, 122, 0, 0.2)' },
        { id: 2, item: 'Refrescos', price: '1.266.000€', color: 'rgba(82, 0, 255, 0.2)' },
        { id: 3, item: 'Agua', price: '643.000€', color: 'rgba(0, 133, 255, 0.2)' },
      ];
  return (
    <SectiionWrapper size={contentSize}>
      <SalesInfo>
        <SalesSection>
          <SalesTitle>Facturación</SalesTitle>
          <CalendarContainer>Calendario</CalendarContainer>
        </SalesSection>
        <SalesContent>
          <Combined key={data[0].id} color={data[0].color}>
            <p>{data[0].item}</p>
            <p>{data[0].price}</p>
          </Combined>
          <Refreshments key={data[1].id} color={data[1].color}>
            <p>{data[1].item}</p>
            <p>{data[1].price}</p>
          </Refreshments>
          <Water key={data[2].id} color={data[2].color}>
            <p>{data[2].item}</p>
            <p>{data[2].price}</p>
          </Water>
        </SalesContent>
      </SalesInfo>
    </SectiionWrapper>
  )
};
*/

export interface SalesLayoutProps {
  height: '130%' | '163%';
}

export const SalesLayout: React.FC<SalesLayoutProps> = ({ height }) => {
  const data = [
    { id: 1, item: 'Combinados', price: '2.484.000€', color: 'rgba(255, 122, 0, 0.2)' },
    { id: 2, item: 'Refrescos', price: '1.266.000€', color: 'rgba(82, 0, 255, 0.2)' },
    { id: 3, item: 'Agua', price: '643.000€', color: 'rgba(0, 133, 255, 0.2)' },
  ];
  return (
    <SectiionWrapper style={{ height }}>
    <SalesInfo>
      <SalesSection>
        <SalesTitle>Facturación</SalesTitle>
        <CalendarContainer>Calendario</CalendarContainer>
      </SalesSection>
      <SalesContent>
        <Combined key={data[0].id} color={data[0].color}>
          <p>{data[0].item}</p>
          <p>{data[0].price}</p>
        </Combined>
        <Refreshments key={data[1].id} color={data[1].color}>
          <p>{data[1].item}</p>
          <p>{data[1].price}</p>
        </Refreshments>
        <Water key={data[2].id} color={data[2].color}>
          <p>{data[2].item}</p>
          <p>{data[2].price}</p>
        </Water>
      </SalesContent>
    </SalesInfo>
  </SectiionWrapper>
  );
};


/*
export const SalesLayout: React.FC = () => {
    const data = [
        { id: 1, item: 'Combinados', price: '2.484.000€', color: 'rgba(255, 122, 0, 0.2)' },
        { id: 2, item: 'Refrescos', price: '1.266.000€', color: 'rgba(82, 0, 255, 0.2)' },
        { id: 3, item: 'Agua', price: '643.000€', color: 'rgba(0, 133, 255, 0.2)' },
      ];
  return (
    <SectiionWrapper >
      <SalesInfo>
        <SalesSection>
          <SalesTitle>Facturación</SalesTitle>
          <CalendarContainer>Calendario</CalendarContainer>
        </SalesSection>
        <SalesContent>
          <Combined key={data[0].id} color={data[0].color}>
            <p>{data[0].item}</p>
            <p>{data[0].price}</p>
          </Combined>
          <Refreshments key={data[1].id} color={data[1].color}>
            <p>{data[1].item}</p>
            <p>{data[1].price}</p>
          </Refreshments>
          <Water key={data[2].id} color={data[2].color}>
            <p>{data[2].item}</p>
            <p>{data[2].price}</p>
          </Water>
        </SalesContent>
      </SalesInfo>
    </SectiionWrapper>
  )
};*/