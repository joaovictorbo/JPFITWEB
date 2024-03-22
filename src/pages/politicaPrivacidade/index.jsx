import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import logoFit from "../../assets/logoFit.png";

export default function Register() {
  return (
    <div className={style.register}>
    
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Política de Privacidade </h1>
          
            <div className={style.janelaVerMais}>
              <p>
              Política de Privacidade

              Esta política de privacidade é aplicável ao aplicativo JPFIT (doravante denominado "Aplicativo") para dispositivos móveis, que foi desenvolvido por (doravante denominado "Provedor de Serviços") como um serviço Gratuito. Este serviço é fornecido "COMO ESTÁ".

              Que informações o Aplicativo obtém e como são utilizadas?
              Informações fornecidas pelo usuário

              O Aplicativo adquire as informações que você fornece quando você baixa e registra o Aplicativo. O registro junto ao Provedor de Serviços não é obrigatório. No entanto, lembre-se de que talvez você não consiga utilizar alguns dos recursos oferecidos pelo Aplicativo, a menos que se registre neles.

              O Provedor de Serviços também pode usar as informações que você forneceu para entrar em contato com você de tempos em tempos para fornecer informações importantes, avisos necessários e promoções de marketing.

              Informações coletadas automaticamente

              Além disso, o Aplicativo pode coletar determinadas informações automaticamente, incluindo, entre outras, o tipo de dispositivo móvel que você usa, o ID exclusivo do dispositivo móvel, o endereço IP do seu dispositivo móvel, o sistema operacional móvel, o tipo de dispositivo móvel Navegadores de Internet que você usa e informações sobre a maneira como você usa o Aplicativo.

              O Aplicativo coleta informações precisas de localização do dispositivo em tempo real?

              Este Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.

              Terceiros veem e/ou têm acesso às informações obtidas pelo Aplicativo?

              Apenas dados agregados e anonimizados são transmitidos periodicamente a serviços externos para ajudar o Provedor de Serviços a melhorar o Aplicativo e seu serviço. O Provedor de Serviços pode compartilhar suas informações com terceiros nas formas descritas nesta declaração de privacidade.

              Observe que o Aplicativo utiliza serviços de terceiros que possuem sua própria Política de Privacidade sobre o tratamento de dados. Abaixo estão os links para a Política de Privacidade dos prestadores de serviços terceirizados utilizados pelo Aplicativo:
              Serviços do Google Play

              O Provedor de Serviços pode divulgar Informações Fornecidas pelo Usuário e Coletadas Automaticamente:

              conforme exigido por lei, como para cumprir uma intimação ou processo legal semelhante;
              quando acreditam de boa fé que a divulgação é necessária para proteger os seus direitos, proteger a sua segurança ou a segurança de outros, investigar fraudes ou responder a um pedido governamental;
              com seus provedores de serviços confiáveis ​​que trabalham em seu nome, não fazem uso independente das informações que lhes divulgamos e concordaram em aderir às regras estabelecidas nesta declaração de privacidade.


              Quais são os meus direitos de exclusão?

              Você pode interromper facilmente toda a coleta de informações pelo Aplicativo desinstalando o Aplicativo. Você pode usar os processos de desinstalação padrão que podem estar disponíveis como parte do seu dispositivo móvel ou através do mercado ou rede de aplicativos móveis.
              Política de retenção de dados, gerenciamento de suas informações

              O Provedor de Serviços reterá os dados fornecidos pelo usuário enquanto você usar o Aplicativo e por um período razoável a partir de então. O Provedor de Serviços reterá as informações coletadas automaticamente por até 24 meses e, posteriormente, poderá armazená-las de forma agregada. Se desejar que o Provedor de Serviços exclua os Dados Fornecidos pelo Usuário que você forneceu por meio do Aplicativo, entre em contato com ele pelo e-mail inovatecjpa@gmail.com e responderemos em um prazo razoável. Observe que alguns ou todos os Dados Fornecidos pelo Usuário podem ser necessários para que o Aplicativo funcione corretamente.

              Crianças

              O Provedor de Serviços não usa o Aplicativo para solicitar conscientemente dados ou comercializá-los para crianças menores de 13 anos.

              O Aplicativo não se dirige a ninguém com menos de 13 anos de idade. O Provedor de Serviços não coleta intencionalmente informações de identificação pessoal de crianças com menos de 13 anos de idade. Caso o Provedor de Serviços descubra que uma criança menor de 13 anos forneceu informações pessoais, o Provedor de Serviços as excluirá imediatamente de seus servidores. Se você é pai ou responsável e tem conhecimento de que seu filho nos forneceu informações pessoais, entre em contato com o Prestador de Serviços (inovatecjpa@gmail.com) para que ele possa tomar as medidas necessárias.
              Segurança

              O Provedor de Serviços se preocupa em salvaguardar a confidencialidade de suas informações. O Provedor de Serviços fornece salvaguardas físicas, eletrônicas e processuais para proteger as informações que processamos e mantemos. Por exemplo, limitamos o acesso a estas informações a funcionários e prestadores de serviços autorizados que necessitam de conhecer essas informações para operar, desenvolver ou melhorar a sua Aplicação. Esteja ciente de que, embora nos esforcemos para fornecer segurança razoável às informações que processamos e mantemos, nenhum sistema de segurança pode impedir todas as possíveis violações de segurança.

              Mudanças

              Esta Política de Privacidade pode ser atualizada periodicamente por qualquer motivo. O Provedor de Serviços irá notificá-lo sobre quaisquer alterações na Política de Privacidade, atualizando esta página com a nova Política de Privacidade. Aconselhamos que consulte esta Política de Privacidade regularmente para quaisquer alterações, pois o uso continuado é considerado aprovação de todas as alterações.
              Esta política de privacidade entra em vigor a partir de 22/03/2024

              Sua permissão

              Ao usar o Aplicativo, você está dando seu consentimento para que o Provedor de Serviços processe suas informações conforme estabelecido nesta Política de Privacidade agora e conforme alterado por nós. "Processamento" significa usar cookies em um computador/dispositivo portátil ou usar ou tocar informações de qualquer forma, incluindo, mas não se limitando a, coletar, armazenar, excluir, usar, combinar e divulgar informações.

              Contate-nos

              Se você tiver alguma dúvida sobre privacidade ao usar o Aplicativo, ou tiver dúvidas sobre as práticas, entre em contato com o Provedor de Serviços por e-mail em inovatecjpa@gmail.com.
              </p>
            </div>

          <button type="submit" className={style.cadastrarLink}>
            Aceitar
          </button>
        </div>

        <div className={style.logo}>
          <img className={style.logoFit} src={logoFit} alt="" />
        </div>
      </section>
    </div>
  );
}
