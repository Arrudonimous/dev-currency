import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import {
  Container, Label, Card, Coin,
} from './styles';
import { ReloadContext } from '../../context/ReloadContext';

export default function Content() {
  const { state } = useContext(ReloadContext);
  const [info, setInfo] = useState();

  const urlCoin = 'https://rest.coinapi.io/v1/assets?apikey=96E2FB80-CF78-4830-B601-2AE17FC949C1';

  useEffect(() => (
    async () => {
      const { data } = await axios.get(urlCoin);
      setInfo([data[1], data[17], data[25], data[42]]);
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
            {/* <h1 /> */}
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
      {info.map((item) => (
        <Card>
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
            {((Math.round(item.price_usd * 100 * 5.33) / 100).toFixed(2))}
          </span>
        </Card>
      ))}
    </Container>

  );
}
