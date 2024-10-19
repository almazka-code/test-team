import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Profile: React.FC = () => {
  const { email } = useSelector((state: RootState) => state.card.info);

  const contacts = [
    {
      name: 'phone',
      personalClass: styles.phone,
      href: 'tel:+79543334455',
      text: '+7 (954) 333-44-55',
    },
    {
      name: 'mail',
      personalClass: styles.mail,
      href: `mailto:${email}`,
      text: email,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p className={styles.paragraph}>
          Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых
          продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и
          ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи, используя самые
          современные аналитические инструменты.
        </p>
        <p className={styles.paragraph}>
          В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться
          с трудностями. Не менее важно уделять внимание обмену знаниями: &quot;Один из самых
          позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый
          уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все
          необходимое, чтобы дальше развиваться самостоятельно&quot;.
        </p>
        <p>
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
          предпринимательскую деятельность. Он является совладельцем сети клиник эстетической
          медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором
          других бизнес-проектов.
        </p>
      </div>
      <ul className={styles.contacts}>
        {contacts.map(contact => (
          <li key={contact.name} className={styles.item}>
            <div className={`${styles.icon} ${contact.personalClass}`}></div>
            <a className={styles.info} href={contact.href}>
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
