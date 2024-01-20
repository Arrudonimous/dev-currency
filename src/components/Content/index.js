import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import {
  Container, Label, Card, Coin, Skeleton,
} from './styles';
import { ReloadContext } from '../../context/ReloadContext';

export default function Content() {
  const { state } = useContext(ReloadContext);
  const [info, setInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const urlCoin = 'https://rest.coinapi.io/v1/assets?apikey=96E2FB80-CF78-4830-B601-2AE17FC949C1';

  useEffect(() => (
    async () => {
      setIsLoading(true);
      const { data } = await axios.get(urlCoin);
      setInfo([data[1], data[17], data[25], data[20]]);
      setIsLoading(false);
    }
  ), [state]);

  if (!info) {
    return (
      <Container>
        <Label>
          <span>Moeda</span>
          <span>Valor mercado</span>
          <span>Preço</span>
        </Label>
        <Card>
          <Coin>
            <span />
            <span />
          </Coin>
          <span />
          <span />
        </Card>

      </Container>
    );
  }

  return (
    <Container>
      <Label>
        <span>Moeda</span>
        <span>Valor mercado</span>
        <span>Preço</span>
      </Label>
      {isLoading ? (
        Array.from({ length: 4 }).map(() => (
          <Card>
            <Coin>
              <Skeleton />
            </Coin>
            <span>
              <Skeleton />
            </span>
            <span>
              <Skeleton />
            </span>
          </Card>
        ))
      ) : (
        info.map((item) => (
          <Card key={item.asset_id}>
            <Coin>
              <h1>{item.name}</h1>
              <span>|</span>
              <span>{item.asset_id}</span>
            </Coin>
            <span>
              $
              {(Math.round(item.price_usd * 100) / 100).toFixed(2)}
            </span>
            <span>
              R$
              {(Math.round(item.price_usd * 100 * 5.33) / 100).toFixed(2)}
            </span>
          </Card>
        ))
      )}

    </Container>

  );
}
