import style from '../styles/Footer.module.css';

const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();
  return (
    <div className={style.footer}>
      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
