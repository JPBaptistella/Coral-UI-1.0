import React from 'react'
import Paper from '@material-ui/core/Paper'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default ({ styles }) => (
  <Paper style={styles.Paper}>
    <Typography variant="h6"> Informações </Typography>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Definição</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Produto para ingestão oral, apresentado em formas farmacêuticas,
          destinado a suplementar a alimentação de indivíduos saudáveis com
          nutrientes, substâncias bioativas, enzimas ou probióticos, isolados ou
          combinados.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Denominação de Venda</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 12. Os produtos de que trata esta Resolução devem ser designados
          como “Suplemento Alimentar” acrescido da sua forma farmacêutica. § 1°
          A designação dos produtos pode ser complementada com as seguintes
          informações: I -nomes individuais dos nutrientes, das substâncias
          bioativas ou das enzimas; II -nomes das categorias de nutrientes,
          substâncias bioativas ou enzimas; III -nome da fonte da qual foi
          extraída o nutriente, a substância bioativa ou a enzima; ou IV
          -identificação da linhagem ou nome comercial do micro-organismo, no
          caso de suplementos alimentares contendo probióticos. § 2° Devem ser
          atendidos os requisitos específicos de designação dos constituintes
          que constem nos Anexos V ou VI da Instrução Normativa n° 28, de 26 de
          julhode 2018
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Formula</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 4° Os constituintes autorizados para uso na composição de
          suplementos alimentares restringem-se àqueles previstos nos Anexos I e
          II da Instrução Normativa n° 28, de 26 de julho de 2018, que
          estabelece as listas de constituintes, de limites de uso, de alegações
          e de rotulagem complementar dos suplementos alimentares. §1° Até que
          sejam atualizados os Anexos I e II da Instrução Normativa n° 28, de 26
          de julho de 2018, podem ser utilizados os constituintes aprovados por
          meio de Resolução (RE), resultante da avaliação da petição de
          avaliação de segurança e de eficácia de que trata o art. 20. § 2° Os
          constituintes de que trata o caput podem ser utilizados isolados ou em
          combinação, desde que não exista nenhuma restrição descrita nas
          condições aprovadas Art. 6° Outros ingredientes podem ser empregados
          na elaboração de suplementos alimentares para fornecer sabor, cor ou
          aroma ou para dissolver, diluir, dispersar ou alterar sua consistência
          ou forma, desde que atendam aos seguintes requisitos: I -sejam
          utilizados tradicionalmente na elaboração de alimentos; II -atendam os
          respectivos padrões de identidade e qualidade; III -não sejam
          classificados como aditivos alimentares ou coadjuvantes de tecnologia;
          IV -não sejam classificados como novos alimentos ou novos
          ingredientes, segundo a Resolução n° 16, de 30 de abril de 1999, que
          aprova o regulamento técnico de procedimentos para registro de
          alimentos e ou novos ingredientes; V -não sejam ingredientes fontes de
          aminoácidos, vitaminas, minerais, substâncias bioativas, enzimas ou
          probióticos, conforme Anexos I e II da Instrução Normativa n° 28, de
          26 de julho de 2018;VI -não descaracterizem a finalidade de uso ou a
          forma de apresentação do produto como suplemento alimentar; eVII -não
          sejam objeto de qualquer alegação na rotulagem ou propaganda que
          sugira que o ingrediente é fonte de nutrientes, substâncias bioativas,
          enzimas ou probióticos.Parágrafo único. Caso os ingredientes de que
          trata o caput também constem como fontes de proteínas, carboidratos,
          fibras alimentares ou lipídios nos Anexos I e II da Instrução
          Normativa n° 28, de 26 de julho de 2018, que estabelece as listas de
          constituintes, de limites de uso, de alegações e de rotulagem
          complementar dos suplementos alimentares, não se aplicam os limites
          mínimos exigidos no art. 9° desta Resolução.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Constituintes Proibidos</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 7° Não são permitidos na composição de suplementos alimentares: I
          -substâncias consideradas como doping pela Agência Mundial
          Antidopagem; II -substâncias sujeitas a controle especial, conforme
          Portaria n° 344, de 12 de maio de 1998, que aprova o regulamento
          técnico sobre substâncias e medicamentos sujeitos a controle especial,
          e suas atualizações; III -substâncias obtidas das espécies que não
          podem ser utilizadas na composição de produtos tradicionais
          fitoterápicos, conforme Anexo I da Resolução -RDC n° 26, de 13 de maio
          de 2014, que dispõe sobre o registro de medicamentos fitoterápicos e o
          registro e a notificação de produtos tradicionais fitoterápicos; IV
          -óleos e gorduras parcialmente hidrogenados
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Aditivos</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 5° Os aditivos alimentares e os coadjuvantes de tecnologia
          autorizados para uso em suplementos alimentares restringem-se àqueles
          previstos na Resolução RDC n° 239, de 26 de julho de 2018, que
          estabelece os aditivos alimentares e coadjuvantes de tecnologia
          autorizados para uso em suplementos alimentares Art. 2° Os aditivos
          alimentares autorizados para uso em suplementos alimentares, nas suas
          respectivas funções, limites máximos e condições de uso se encontram
          listados no Anexo I desta Resolução. § 1° No caso dos suplementos
          alimentares indicados para lactentes ou para crianças de primeira
          infância, os aditivos alimentares autorizados, nas suas respectivas
          funções, limites máximos e condições de uso restringem-se àqueles
          listados no Anexo II desta Resolução. § 2° Os limites máximos
          previstos correspondem aos valores a serem observados no produto
          pronto para consumo, preparado de acordo com as instruções do
          fabricante. § 3° Quando forem utilizados dois ou mais aditivos
          alimentares com a mesma função tecnológica e para os quais existam
          limites máximos numéricos estabelecidos, a soma das quantidades destes
          aditivos no produto pronto para o consumo não pode ser superior ao
          limite estabelecido para o aditivo permitido em maior quantidade. § 4°
          O disposto no § 3° não se aplica aos aditivos corantes usados na
          fabricação de suplementos alimentares apresentados na forma de
          comprimidos, drágeas, cápsulas e tabletes. § 5° Caso um mesmo aditivo
          alimentar seja utilizado com o objetivo de exercer duas ou mais
          funções tecnológicas, para as quais tenham sido estabelecidos limites
          máximos numéricos diferentes, a quantidade máxima a ser utilizada não
          pode ser superior ao maior limite estabelecido para este aditivo,
          dentre as funções para as quais é autorizado. § 6°No caso de
          suplementos alimentares que podem ser consumidos em mais de uma forma,
          devem ser atendidas simultaneamente as provisões de aditivos
          alimentares para todas as formas previstas de consumo.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Limites</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 9° As quantidades de nutrientes, substâncias bioativas, enzimas e
          probióticos contidas nos suplementos alimentares devem atender aos
          limites mínimos e máximos de uso estabelecidos nos Anexos III e IV da
          Instrução Normativa n° 28, de 26 de julho de 2018. §1° Os limites
          mínimos e máximos devem ser atendidos na recomendação diária de
          consumo do produto para os respectivos grupos populacionais indicados
          pelo fabricante. § 2° Os limites mínimos e máximos de que trata o
          caput não se aplicam aos suplementos alimentares destinados
          exclusivamente a Programas de Saúde Pública do Ministério da Saúde.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Rotulagem</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 17. Sem prejuízo dos requisitos dispostos no Decreto-Lei 986, de
          21 de outubro de 1969, que institui normas básicas sobre alimentos e
          dos requisitos dispostos na Resolução -RDC n° 259, de 2002, a
          rotulagem dos suplementos alimentares não pode apresentar palavras,
          marcas, imagens ou qualquer outra representação gráfica, inclusive em
          outros idiomas, que afirmem, sugiram ou impliquem, expressa ou
          implicitamente, que: I -o produto possui finalidade medicamentosa ou
          terapêutica; II -o produto contém substâncias não autorizadas ou
          proibidas; III -a alimentação não é capaz de fornecer os componentes
          necessários à saúde; ou IV -o produto é comparável ou superior a
          alimentos convencionais
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Alegações</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 16. As alegações autorizadas para uso em suplementos alimentares
          restringem-se àquelas previstas no Anexo V da Instrução Normativa n°
          28, de 26 de julho de 2018, desde que atendidos os respectivos
          requisitos. § 1° Não são permitidas variações textuais das alegações
          autorizadas, exceto quando: I -as alegações para uma mesma substância
          forem reunidas numa única frase; ou II-as alegações idênticas para
          substâncias diferentes forem reunidas numa única frase. § 2° O uso das
          alegações é opcional, exceto para os suplementos alimentares com
          probióticos ou com enzimas. § 3° Não são permitidas alegações
          relativas ao conteúdo epropriedades de aditivos alimentares e de
          coadjuvantes de tecnologia e relativas a propriedades dos ingredientes
          de que trata o art. 6° desta Resolução, salvo nos casos previstos pela
          legislação. Art. 19. A Resolução -RDC n° 54, de 12 de novembro de
          2012, que dispõe sobre o regulamento técnico sobre informação
          nutricional complementar, não se aplica aos suplementos alimentares.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Informação Nutricional</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 15. A rotulagem nutricional dos suplementos alimentares deve
          seguir o disposto na Resolução -RDC n° 360, de 23 de dezembro de 2003,
          que aprova o regulamento técnico sobre rotulagem nutricional de
          alimentos embalados, com as seguintes especificidades: I -a porção
          declarada na informação nutricional deve ser a quantidade diária
          recomendada pelo fabricante, para cada um dos grupos populacionais e
          faixas etárias específicos indicados no rótulo; II -a informação
          nutricional deve conter as quantidades de todos os nutrientes,
          substâncias bioativas, enzimas e probióticos fornecidos pelo produto
          declaradas nas unidades de medida previstas nos Anexos III e IV da
          Instrução Normativa n° 28, de 26 de julho de 2018; III -o percentual
          de valor diário (%VD) deve ser declarado para cada um dos grupos
          populacionais específicos indicados no rótulo, com base nos valores de
          ingestão diária recomendada dispostos na Resolução -RDC n° 269, de 22
          de setembro de 2005, que aprova o regulamento técnico sobre a ingestão
          diária recomendada (IDR) de proteína, vitaminas e minerais, quando
          estabelecidos.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1">Informação Obrigatória</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          Art. 14. Sem prejuízo dos requisitos dispostos na Resolução - RDC n°
          259, de 20 de setembro de 2002, que aprova o regulamento técnico para
          rotulagem de alimentos embalados, a rotulagem dos suplementos
          alimentares deve apresentar as seguintes informações: I - a
          recomendação de uso, incluindo as seguintes informações agrupadas no
          mesmo local do rótulo: a) os grupos populacionais dos Anexos III e IV
          da Instrução Normativa n° 28, de 26 de julho de 2018, para o qual o
          produto é indicado, incluindo a faixa etária no caso de crianças; b) a
          quantidade e a frequência de consumo para cada um dos grupos
          populacionais indicados no rótulo; c) a advertência em destaque e
          negrito "Este produto não é um medicamento"; d) a advertência em
          destaque e negrito "Não exceder a recomendação diária de consumo
          indicada na embalagem"; e e) a advertência em destaque e negrito
          "Mantenha fora do alcance de crianças". II - as instruções de
          conservação, inclusive após a abertura da embalagem; e III - a
          identificação da espécie de cada linhagem, de acordo com a
          nomenclatura binomial mais atual, na lista de ingredientes dos
          suplementos alimentares contendo probióticos. § 1° As informações
          exigidas na alínea a do inciso I podem ser complementadas por
          indicações para gêneros e faixas etárias específicas e para
          praticantes de atividade física e atletas dentro de cada grupo
          populacional indicado no rótulo. § 2° Devem ser atendidos os
          requisitos complementares de rotulagem para os suplementos alimentares
          estabelecidos no Anexo VI da Instrução Normativa n° 28, de 26 de julho
          de 2018
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Paper>
)
