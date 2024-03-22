import style from "./style.module.css";
import logoFit from "../../assets/logoFit.png";

export default function Register() {
  return (
    <div className={style.register}>
    
      <section className={style.content}>
        <div className={style.contentForm}>
          <h1> Termos e Condições </h1>
          
            <div className={style.janelaVerMais}>
              <p>
              Termos e Condições

              Estes termos e condições aplicam-se ao aplicativo JPFIT (doravante referido como "Aplicativo") para dispositivos móveis que foi criado por (doravante referido como "Fornecedor de Serviços") como um serviço gratuito.

              Ao baixar ou utilizar o Aplicativo, você automaticamente concorda com os seguintes termos. É fortemente recomendado que você leia e compreenda completamente estes termos antes de usar o Aplicativo. A cópia não autorizada, modificação do Aplicativo, de qualquer parte do Aplicativo, ou de nossas marcas comerciais é estritamente proibida. Qualquer tentativa de extrair o código-fonte do Aplicativo, traduzir o Aplicativo para outros idiomas, ou criar versões derivadas não é permitida. Todas as marcas comerciais, direitos autorais, direitos de banco de dados e outros direitos de propriedade intelectual relacionados ao Aplicativo permanecem de propriedade do Fornecedor de Serviços.

              O Fornecedor de Serviços está dedicado a garantir que o Aplicativo seja o mais benéfico e eficiente possível. Como tal, eles reservam o direito de modificar o Aplicativo ou cobrar por seus serviços a qualquer momento e por qualquer motivo. O Fornecedor de Serviços garante que quaisquer cobranças pelo Aplicativo ou seus serviços serão claramente comunicadas a você.

              O Aplicativo armazena e processa dados pessoais que você forneceu ao Fornecedor de Serviços para fornecer o Serviço. É sua responsabilidade manter a segurança do seu telefone e o acesso ao Aplicativo. O Fornecedor de Serviços desaconselha veementemente o jailbreaking ou o rooting do seu telefone, o que envolve remover restrições e limitações de software impostas pelo sistema operacional oficial do seu dispositivo. Tais ações podem expor seu telefone a malware, vírus, programas maliciosos, comprometer os recursos de segurança do seu telefone e podem resultar no Aplicativo não funcionando corretamente ou de todo.

              Observe que o Aplicativo utiliza serviços de terceiros que têm seus próprios Termos e Condições. Abaixo estão os links para os Termos e Condições dos provedores de serviços de terceiros usados pelo Aplicativo:

              Esteja ciente de que o Fornecedor de Serviços não assume a responsabilidade por certos aspectos. Algumas funções do Aplicativo requerem uma conexão ativa com a internet, que pode ser Wi-Fi ou fornecida pelo seu provedor de rede móvel. O Fornecedor de Serviços não pode ser responsabilizado se o Aplicativo não funcionar plenamente devido à falta de acesso ao Wi-Fi ou se você esgotou sua franquia de dados.

              Se você estiver usando o aplicativo fora de uma área de Wi-Fi, esteja ciente de que os termos do acordo do seu provedor de rede móvel ainda se aplicam. Consequentemente, você pode incorrer em cobranças do seu provedor de celular pelo uso de dados durante a conexão com o aplicativo, ou outras cobranças de terceiros. Ao usar o aplicativo, você aceita a responsabilidade por tais cobranças, incluindo as cobranças de roaming de dados se usar o aplicativo fora do seu território doméstico (ou seja, região ou país) sem desabilitar o roaming de dados. Se você não for o pagador da conta do dispositivo em que estiver usando o aplicativo, eles assumem que você obteve permissão do pagador da conta.

              Da mesma forma, o Fornecedor de Serviços nem sempre pode assumir a responsabilidade pelo seu uso do aplicativo. Por exemplo, é sua responsabilidade garantir que seu dispositivo permaneça carregado. Se o seu dispositivo ficar sem bateria e você não puder acessar o Serviço, o Fornecedor de Serviços não pode ser responsabilizado.

              Em termos de responsabilidade do Fornecedor de Serviços pelo seu uso do aplicativo, é importante observar que, embora se esforcem para garantir que ele seja atualizado e preciso em todos os momentos, eles dependem de terceiros para fornecer informações a eles para que possam disponibilizá-las para você. O Fornecedor de Serviços não aceita nenhuma responsabilidade por qualquer perda, direta ou indireta, que você possa sofrer como resultado de depender exclusivamente dessa funcionalidade do aplicativo.

              O Fornecedor de Serviços pode desejar atualizar o aplicativo em algum momento. O aplicativo está atualmente disponível conforme os requisitos do sistema operacional (e para quaisquer sistemas adicionais que eles decidam estender a disponibilidade do aplicativo) podem mudar, e você precisará baixar as atualizações se quiser continuar usando o aplicativo. O Fornecedor de Serviços não garante que sempre atualizará o aplicativo para que seja relevante para você e/ou compatível com a versão específica do sistema operacional instalada no seu dispositivo. No entanto, você concorda em sempre aceitar atualizações para o aplicativo quando oferecidas a você. O Fornecedor de Serviços também pode desejar interromper a prestação do aplicativo e pode encerrar seu uso a qualquer momento sem fornecer aviso de término a você. A menos que eles informem o contrário, após qualquer término, (a) os direitos e licenças concedidos a você nestes termos terminarão; (b) você deve cessar o uso do aplicativo e (se necessário) excluí-lo do seu dispositivo.

              Alterações a Estes Termos e Condições

              O Fornecedor de Serviços pode periodicamente atualizar seus Termos e Condições. Portanto, é aconselhável revisar esta página regularmente para quaisquer alterações. O Fornecedor de Serviços irá notificá-lo de quaisquer alterações postando os novos Termos e Condições nesta página.

              Estes termos e condições são eficazes a partir de 22 de março de 2024.

              Entre em Contato

              Se você tiver alguma dúvida ou sugestão sobre os Termos e Condições, não hesite em entrar em contato com o Fornecedor de Serviços em inovatecjpa@gmail.com.
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
