// ProblemSection.tsx (PIKA Nível 3 - Grid de Contraste e Perda)
import * as S from './styles';
import { Users, AlertTriangle, TrendingDown, Maximize } from 'lucide-react'; 

const ProblemSection = () => {
  return (
    <S.Section id="problema">
      <div className='container'>
        <S.Title>
          VOCÊ ESTÁ <S.Highlight>PERDENDO</S.Highlight> OPORTUNIDADES.
        </S.Title>
        
        <S.Subtitle>
          Profissionais liberais são excelentes em seus consultórios, mas péssimos em escala. Viver de indicações é aceitar um teto de faturamento. Esta é a realidade do prejuízo:
        </S.Subtitle>
        
        <S.PainGrid>
          
          {/* Coluna Esquerda: O Que Você Pensa (A Ilusão) */}
          
          <S.PainCard>
            <S.PainHeader>
                <Users size={36} />
                <span>O "SUCESSO" PASSIVO</span>
            </S.PainHeader>
            <h3>Dependência de Terceiros</h3>
            <p>Você tem clientes, sim. Mas eles só chegam quando alguém te indica. Isso significa que **você não controla o seu crescimento**. Sua agenda está à mercê do timing e da vontade de terceiros.</p>
          </S.PainCard>

          {/* Coluna Direita: A Perda Real (O Prejuízo) */}

          <S.PainCard>
            <S.PainHeader>
                <TrendingDown size={36} />
                <span>O PREJUÍZO REAL</span>
            </S.PainHeader>
            <h3>Crescimento Engessado</h3>
            <p>Sem um fluxo ativo, previsível e escalável, você não pode contratar, expandir ou investir. Você está preso ao **mesmo patamar de faturamento** por ser refém do boca a boca.</p>
          </S.PainCard>


          {/* BLOQUEIO 3: VALOR PERCEBIDO (A Falha da Indicação) */}

          <S.PainCard>
            <S.PainHeader>
                <AlertTriangle size={36} />
                <span>A FALHA CRÍTICA</span>
            </S.PainHeader>
            <h3>A Confiança Não é Validada</h3>
            <p>A indicação é apenas o primeiro passo. Se o lead buscar seu nome e encontrar um site fraco ou nada, a **autoridade desmorona**. Sua credibilidade é sabotada pela ausência de um ativo profissional.</p>
          </S.PainCard>

          {/* BLOQUEIO 4: CONTROLE E FUTURO */}

          <S.PainCard>
            <S.PainHeader>
                <Maximize size={36} />
                <span>O FUTURO CONTRLADO</span>
            </S.PainHeader>
            <h3>Falta de Previsibilidade</h3>
            <p>Se você não sabe quantos leads qualificados terá no próximo mês, você não tem um negócio, tem um hobby caro. Uma LP profissional é o seu único motor de **previsibilidade financeira**.</p>
          </S.PainCard>
        
        </S.PainGrid>
        
        {/* Ponte para a Solução */}
        <S.Subtitle style={{ marginTop: '80px', marginBottom: '0' }}>
            Transforme a incerteza da indicação no recorrencia de novos clientes com um site profissional que trabalha 24/7 para você.
        </S.Subtitle>

      </div>
    </S.Section>
  );
}

export default ProblemSection;