import { http } from 'SERVICES/HttpService';
import { useEffect } from 'react';

export default function SkillsItem() {
  useEffect(() => {
    http
      .get('/skills')
      .then(({ data }) => data)
      .then(({ data }) => console.log(data));
  }, []);
  return <></>;
}
