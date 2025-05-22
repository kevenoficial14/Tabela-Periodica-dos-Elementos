// Verificar modo escuro
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Dados da tabela periódica em português
const elementos = [
    { numero: 1, simbolo: 'H', nome: 'Hidrogênio', massa: '1,008', config: '1s¹', eletroneg: '2,20', estado: 'Gasoso', categoria: 'Não Metal', descoberta: '1766', cor: 'bg-nao-metal', linha: 1, coluna: 1, descricao: 'O elemento mais abundante do universo. Utilizado em combustíveis e na produção de amônia.' },
    { numero: 2, simbolo: 'He', nome: 'Hélio', massa: '4,003', config: '1s²', eletroneg: '-', estado: 'Gasoso', categoria: 'Gás Nobre', descoberta: '1868', cor: 'bg-gas-nobre', linha: 1, coluna: 18, descricao: 'Gás inerte usado em balões e para refrigeração em temperaturas extremamente baixas.' },
    { numero: 3, simbolo: 'Li', nome: 'Lítio', massa: '6,941', config: '[He]2s¹', eletroneg: '0,98', estado: 'Sólido', categoria: 'Metal Alcalino', descoberta: '1817', cor: 'bg-metal-alcalino', linha: 2, coluna: 1, descricao: 'Metal leve utilizado em baterias recarregáveis e em tratamentos psiquiátricos.' },
    { numero: 4, simbolo: 'Be', nome: 'Berílio', massa: '9,012', config: '[He]2s²', eletroneg: '1,57', estado: 'Sólido', categoria: 'Metal Alcalino-Terroso', descoberta: '1798', cor: 'bg-metal-alcalino-terroso', linha: 2, coluna: 2, descricao: 'Metal leve e rígido usado em ligas e componentes eletrônicos. É tóxico.' },
    { numero: 5, simbolo: 'B', nome: 'Boro', massa: '10,81', config: '[He]2s²2p¹', eletroneg: '2,04', estado: 'Sólido', categoria: 'Semimetal', descoberta: '1808', cor: 'bg-semimetal', linha: 2, coluna: 13, descricao: 'Usado em detergentes, vidros borossilicatos e como dopante em semicondutores.' },
    { numero: 6, simbolo: 'C', nome: 'Carbono', massa: '12,01', config: '[He]2s²2p²', eletroneg: '2,55', estado: 'Sólido', categoria: 'Não Metal', descoberta: 'Pré-histórica', cor: 'bg-nao-metal', linha: 2, coluna: 14, descricao: 'Base da química orgânica e de todas as formas de vida conhecidas. Ocorre como grafite, diamante e outras formas.' },
    { numero: 7, simbolo: 'N', nome: 'Nitrogênio', massa: '14,01', config: '[He]2s²2p³', eletroneg: '3,04', estado: 'Gasoso', categoria: 'Não Metal', descoberta: '1772', cor: 'bg-nao-metal', linha: 2, coluna: 15, descricao: 'Constitui 78% da atmosfera terrestre. Usado na produção de amônia e em congelamento rápido.' },
    { numero: 8, simbolo: 'O', nome: 'Oxigênio', massa: '16,00', config: '[He]2s²2p⁴', eletroneg: '3,44', estado: 'Gasoso', categoria: 'Não Metal', descoberta: '1774', cor: 'bg-nao-metal', linha: 2, coluna: 16, descricao: 'Essencial para a respiração e combustão. É o elemento mais abundante na crosta terrestre.' },
    { numero: 9, simbolo: 'F', nome: 'Flúor', massa: '19,00', config: '[He]2s²2p⁵', eletroneg: '3,98', estado: 'Gasoso', categoria: 'Halogênio', descoberta: '1886', cor: 'bg-halogenio', linha: 2, coluna: 17, descricao: 'O elemento mais eletronegativo e reativo. Usado em pasta de dentes e no processamento de urânio.' },
    { numero: 10, simbolo: 'Ne', nome: 'Neônio', massa: '20,18', config: '[He]2s²2p⁶', eletroneg: '-', estado: 'Gasoso', categoria: 'Gás Nobre', descoberta: '1898', cor: 'bg-gas-nobre', linha: 2, coluna: 18, descricao: 'Utilizado em letreiros luminosos e lasers. É o quinto elemento mais abundante no universo.' },

    { numero: 11, simbolo: 'Na', nome: 'Sódio', massa: '22,99', config: '[Ne]3s¹', eletroneg: '0,93', estado: 'Sólido', categoria: 'Metal Alcalino', descoberta: '1807', cor: 'bg-metal-alcalino', linha: 3, coluna: 1, descricao: 'Metal reativo usado em lâmpadas de vapor de sódio e como componente do sal de cozinha (NaCl).' },
    { numero: 12, simbolo: 'Mg', nome: 'Magnésio', massa: '24,31', config: '[Ne]3s²', eletroneg: '1,31', estado: 'Sólido', categoria: 'Metal Alcalino-Terroso', descoberta: '1808', cor: 'bg-metal-alcalino-terroso', linha: 3, coluna: 2, descricao: 'Metal leve usado em ligas, especialmente na indústria aeroespacial. Essencial para os seres vivos.' },
    { numero: 13, simbolo: 'Al', nome: 'Alumínio', massa: '26,98', config: '[Ne]3s²3p¹', eletroneg: '1,61', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1825', cor: 'bg-metal-transicao', linha: 3, coluna: 13, descricao: 'Metal leve e resistente, amplamente usado em embalagens, construção e transporte.' },
    { numero: 14, simbolo: 'Si', nome: 'Silício', massa: '28,09', config: '[Ne]3s²3p²', eletroneg: '1,90', estado: 'Sólido', categoria: 'Semimetal', descoberta: '1824', cor: 'bg-semimetal', linha: 3, coluna: 14, descricao: 'Componente fundamental dos semicondutores e da eletrônica moderna. Segundo elemento mais abundante na crosta terrestre.' },
    { numero: 15, simbolo: 'P', nome: 'Fósforo', massa: '30,97', config: '[Ne]3s²3p³', eletroneg: '2,19', estado: 'Sólido', categoria: 'Não Metal', descoberta: '1669', cor: 'bg-nao-metal', linha: 3, coluna: 15, descricao: 'Componente essencial do DNA e ATP. Usado em fertilizantes e fósforos.' },
    { numero: 16, simbolo: 'S', nome: 'Enxofre', massa: '32,07', config: '[Ne]3s²3p⁴', eletroneg: '2,58', estado: 'Sólido', categoria: 'Não Metal', descoberta: 'Pré-histórica', cor: 'bg-nao-metal', linha: 3, coluna: 16, descricao: 'Utilizado na vulcanização da borracha e na produção de ácido sulfúrico. Componente de alguns aminoácidos.' },
    { numero: 17, simbolo: 'Cl', nome: 'Cloro', massa: '35,45', config: '[Ne]3s²3p⁵', eletroneg: '3,16', estado: 'Gasoso', categoria: 'Halogênio', descoberta: '1774', cor: 'bg-halogenio', linha: 3, coluna: 17, descricao: 'Usado como desinfetante em água potável e piscinas. É um componente do sal de cozinha (NaCl).' },
    { numero: 18, simbolo: 'Ar', nome: 'Argônio', massa: '39,95', config: '[Ne]3s²3p⁶', eletroneg: '-', estado: 'Gasoso', categoria: 'Gás Nobre', descoberta: '1894', cor: 'bg-gas-nobre', linha: 3, coluna: 18, descricao: 'Gás inerte usado em lâmpadas e em atmosferas controladas para soldagem e preservação de alimentos.' },

    { numero: 19, simbolo: 'K', nome: 'Potássio', massa: '39,10', config: '[Ar]4s¹', eletroneg: '0,82', estado: 'Sólido', categoria: 'Metal Alcalino', descoberta: '1807', cor: 'bg-metal-alcalino', linha: 4, coluna: 1, descricao: 'Metal altamente reativo, essencial para o funcionamento das células. Usado em fertilizantes.' },
    { numero: 20, simbolo: 'Ca', nome: 'Cálcio', massa: '40,08', config: '[Ar]4s²', eletroneg: '1,00', estado: 'Sólido', categoria: 'Metal Alcalino-Terroso', descoberta: '1808', cor: 'bg-metal-alcalino-terroso', linha: 4, coluna: 2, descricao: 'Principal componente dos ossos e dentes. Utilizado na construção civil como cal e gesso.' },
    { numero: 21, simbolo: 'Sc', nome: 'Escândio', massa: '44,96', config: '[Ar]4s²3d¹', eletroneg: '1,36', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1879', cor: 'bg-metal-transicao', linha: 4, coluna: 3, descricao: 'Metal leve usado em lâmpadas de alta intensidade e ligas para aplicações aeroespaciais.' },
    { numero: 22, simbolo: 'Ti', nome: 'Titânio', massa: '47,87', config: '[Ar]4s²3d²', eletroneg: '1,54', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1791', cor: 'bg-metal-transicao', linha: 4, coluna: 4, descricao: 'Metal leve e resistente à corrosão, usado em aeronaves, implantes médicos e pigmentos brancos.' },
    { numero: 23, simbolo: 'V', nome: 'Vanádio', massa: '50,94', config: '[Ar]4s²3d³', eletroneg: '1,63', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1801', cor: 'bg-metal-transicao', linha: 4, coluna: 5, descricao: 'Usado principalmente como aditivo em ligas de aço para aumentar a resistência.' },
    { numero: 24, simbolo: 'Cr', nome: 'Cromo', massa: '52,00', config: '[Ar]4s¹3d⁵', eletroneg: '1,66', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1797', cor: 'bg-metal-transicao', linha: 4, coluna: 6, descricao: 'Utilizado em galvanoplastia para criar superfícies brilhantes e resistentes à corrosão.' },
    { numero: 25, simbolo: 'Mn', nome: 'Manganês', massa: '54,94', config: '[Ar]4s²3d⁵', eletroneg: '1,55', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1774', cor: 'bg-metal-transicao', linha: 4, coluna: 7, descricao: 'Essencial para plantas e animais. Utilizado na produção de aço e em pilhas secas.' },
    { numero: 26, simbolo: 'Fe', nome: 'Ferro', massa: '55,85', config: '[Ar]4s²3d⁶', eletroneg: '1,83', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Pré-histórica', cor: 'bg-metal-transicao', linha: 4, coluna: 8, descricao: 'Metal mais utilizado na indústria. Componente essencial da hemoglobina no sangue.' },
    { numero: 27, simbolo: 'Co', nome: 'Cobalto', massa: '58,93', config: '[Ar]4s²3d⁷', eletroneg: '1,88', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1735', cor: 'bg-metal-transicao', linha: 4, coluna: 9, descricao: 'Usado em ligas magnéticas, tintas e como catalisador. Componente da vitamina B12.' },
    { numero: 28, simbolo: 'Ni', nome: 'Níquel', massa: '58,69', config: '[Ar]4s²3d⁸', eletroneg: '1,91', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1751', cor: 'bg-metal-transicao', linha: 4, coluna: 10, descricao: 'Usado em moedas, baterias recarregáveis e como revestimento protetor para outros metais.' },
    { numero: 29, simbolo: 'Cu', nome: 'Cobre', massa: '63,55', config: '[Ar]4s¹3d¹⁰', eletroneg: '1,90', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Pré-histórica', cor: 'bg-metal-transicao', linha: 4, coluna: 11, descricao: 'Excelente condutor elétrico, usado em fios e cabos. Também utilizado em moedas e ligas como o latão.' },
    { numero: 30, simbolo: 'Zn', nome: 'Zinco', massa: '65,38', config: '[Ar]4s²3d¹⁰', eletroneg: '1,65', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Idade Média', cor: 'bg-metal-transicao', linha: 4, coluna: 12, descricao: 'Usado em galvanização para proteger o aço contra corrosão e em pilhas secas.' },
    { numero: 31, simbolo: 'Ga', nome: 'Gálio', massa: '69,72', config: '[Ar]4s²3d¹⁰4p¹', eletroneg: '1,81', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1875', cor: 'bg-metal-transicao', linha: 4, coluna: 13, descricao: 'Metal que pode derreter na mão. Usado principalmente em semicondutores como o arseneto de gálio.' },
    { numero: 32, simbolo: 'Ge', nome: 'Germânio', massa: '72,63', config: '[Ar]4s²3d¹⁰4p²', eletroneg: '2,01', estado: 'Sólido', categoria: 'Semimetal', descoberta: '1886', cor: 'bg-semimetal', linha: 4, coluna: 14, descricao: 'Semicondutor usado em transistores, fibras ópticas e células solares.' },
    { numero: 33, simbolo: 'As', nome: 'Arsênio', massa: '74,92', config: '[Ar]4s²3d¹⁰4p³', eletroneg: '2,18', estado: 'Sólido', categoria: 'Semimetal', descoberta: 'Pré-histórica', cor: 'bg-semimetal', linha: 4, coluna: 15, descricao: 'Usado em ligas de chumbo, como aditivo em vidros e como semicondutor na forma de arseneto de gálio.' },
    { numero: 34, simbolo: 'Se', nome: 'Selênio', massa: '78,97', config: '[Ar]4s²3d¹⁰4p⁴', eletroneg: '2,55', estado: 'Sólido', categoria: 'Não Metal', descoberta: '1817', cor: 'bg-nao-metal', linha: 4, coluna: 16, descricao: 'Usado em células solares, fotocopiadoras e como suplemento nutricional. Essencial para algumas enzimas.' },
    { numero: 35, simbolo: 'Br', nome: 'Bromo', massa: '79,90', config: '[Ar]4s²3d¹⁰4p⁵', eletroneg: '2,96', estado: 'Líquido', categoria: 'Halogênio', descoberta: '1826', cor: 'bg-halogenio', linha: 4, coluna: 17, descricao: 'Único elemento não metálico líquido à temperatura ambiente. Usado em retardantes de chama.' },
    { numero: 36, simbolo: 'Kr', nome: 'Criptônio', massa: '83,80', config: '[Ar]4s²3d¹⁰4p⁶', eletroneg: '3,00', estado: 'Gasoso', categoria: 'Gás Nobre', descoberta: '1898', cor: 'bg-gas-nobre', linha: 4, coluna: 18, descricao: 'Gás nobre usado em lâmpadas de alta intensidade e em lasers.' },

    { numero: 37, simbolo: 'Rb', nome: 'Rubídio', massa: '85,47', config: '[Kr]5s¹', eletroneg: '0,82', estado: 'Sólido', categoria: 'Metal Alcalino', descoberta: '1861', cor: 'bg-metal-alcalino', linha: 5, coluna: 1, descricao: 'Metal altamente reativo usado em células fotoelétricas e relógios atômicos.' },
    { numero: 38, simbolo: 'Sr', nome: 'Estrôncio', massa: '87,62', config: '[Kr]5s²', eletroneg: '0,95', estado: 'Sólido', categoria: 'Metal Alcalino-Terroso', descoberta: '1790', cor: 'bg-metal-alcalino-terroso', linha: 5, coluna: 2, descricao: 'Utilizado em fogos de artifício para produzir cor vermelha e em cerâmica magnética.' },
    { numero: 39, simbolo: 'Y', nome: 'Ítrio', massa: '88,91', config: '[Kr]5s²4d¹', eletroneg: '1,22', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1794', cor: 'bg-metal-transicao', linha: 5, coluna: 3, descricao: 'Usado em LEDs e lasers, bem como em cerâmicas supercondutoras.' },
    { numero: 40, simbolo: 'Zr', nome: 'Zircônio', massa: '91,22', config: '[Kr]5s²4d²', eletroneg: '1,33', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1789', cor: 'bg-metal-transicao', linha: 5, coluna: 4, descricao: 'Resistente à corrosão, usado em reatores nucleares e em implantes médicos.' },
    { numero: 41, simbolo: 'Nb', nome: 'Nióbio', massa: '92,91', config: '[Kr]5s¹4d⁴', eletroneg: '1,6', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1801', cor: 'bg-metal-transicao', linha: 5, coluna: 5, descricao: 'Brasil é o maior produtor mundial. Usado em ligas especiais, ímãs supercondutores e lentes de câmera.' },
    { numero: 42, simbolo: 'Mo', nome: 'Molibdênio', massa: '95,95', config: '[Kr]5s¹4d⁵', eletroneg: '2,16', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1778', cor: 'bg-metal-transicao', linha: 5, coluna: 6, descricao: 'Utilizado em ligas de aço para aumentar a dureza e a resistência à corrosão. Essencial para algumas enzimas.' },
    { numero: 43, simbolo: 'Tc', nome: 'Tecnécio', massa: '98,00', config: '[Kr]5s²4d⁵', eletroneg: '1,9', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1937', cor: 'bg-metal-transicao', linha: 5, coluna: 7, descricao: 'Primeiro elemento artificialmente produzido. Usado em medicina nuclear para diagnóstico.' },
    { numero: 44, simbolo: 'Ru', nome: 'Rutênio', massa: '101,1', config: '[Kr]5s¹4d⁷', eletroneg: '2,2', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1844', cor: 'bg-metal-transicao', linha: 5, coluna: 8, descricao: 'Usado em ligas resistentes ao desgaste e como catalisador em células de combustível.' },
    { numero: 45, simbolo: 'Rh', nome: 'Ródio', massa: '102,9', config: '[Kr]5s¹4d⁸', eletroneg: '2,28', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1803', cor: 'bg-metal-transicao', linha: 5, coluna: 9, descricao: 'Metal precioso usado em catalisadores de automóveis e em joalheria por sua resistência à corrosão.' },
    { numero: 46, simbolo: 'Pd', nome: 'Paládio', massa: '106,4', config: '[Kr]4d¹⁰', eletroneg: '2,20', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1803', cor: 'bg-metal-transicao', linha: 5, coluna: 10, descricao: 'Utilizado em conversores catalíticos e na joalheria. Pode absorver grandes quantidades de hidrogênio.' },
    { numero: 47, simbolo: 'Ag', nome: 'Prata', massa: '107,9', config: '[Kr]5s¹4d¹⁰', eletroneg: '1,93', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Pré-histórica', cor: 'bg-metal-transicao', linha: 5, coluna: 11, descricao: 'Melhor condutor elétrico e térmico de todos os metais. Usado em joalheria, fotografia e eletrônica.' },
    { numero: 48, simbolo: 'Cd', nome: 'Cádmio', massa: '112,4', config: '[Kr]5s²4d¹⁰', eletroneg: '1,69', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1817', cor: 'bg-metal-transicao', linha: 5, coluna: 12, descricao: 'Usado em baterias recarregáveis e em revestimentos anticorrosivos. É tóxico e cancerígeno.' },
    { numero: 49, simbolo: 'In', nome: 'Índio', massa: '114,8', config: '[Kr]5s²4d¹⁰5p¹', eletroneg: '1,78', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1863', cor: 'bg-metal-transicao', linha: 5, coluna: 13, descricao: 'Usado em telas sensíveis ao toque e monitores de LCD como óxido de índio e estanho (ITO).' },
    { numero: 50, simbolo: 'Sn', nome: 'Estanho', massa: '118,7', config: '[Kr]5s²4d¹⁰5p²', eletroneg: '1,96', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Pré-histórica', cor: 'bg-metal-transicao', linha: 5, coluna: 14, descricao: 'Usado em soldas e no revestimento de latas de alimentos (folha-de-flandres).' },
    { numero: 51, simbolo: 'Sb', nome: 'Antimônio', massa: '121,8', config: '[Kr]5s²4d¹⁰5p³', eletroneg: '2,05', estado: 'Sólido', categoria: 'Semimetal', descoberta: 'Antiga', cor: 'bg-semimetal', linha: 5, coluna: 15, descricao: 'Usado em retardantes de chama, baterias, ligas de chumbo e semicondutores.' },
    { numero: 52, simbolo: 'Te', nome: 'Telúrio', massa: '127,6', config: '[Kr]5s²4d¹⁰5p⁴', eletroneg: '2,1', estado: 'Sólido', categoria: 'Semimetal', descoberta: '1782', cor: 'bg-semimetal', linha: 5, coluna: 16, descricao: 'Usado em ligas, como aditivo em aços e na fabricação de células solares de filme fino.' },
    { numero: 53, simbolo: 'I', nome: 'Iodo', massa: '126,9', config: '[Kr]5s²4d¹⁰5p⁵', eletroneg: '2,66', estado: 'Sólido', categoria: 'Halogênio', descoberta: '1811', cor: 'bg-halogenio', linha: 5, coluna: 17, descricao: 'Essencial para a função da tireoide. Usado como desinfetante e em fotografia.' },
    { numero: 54, simbolo: 'Xe', nome: 'Xenônio', massa: '131,3', config: '[Kr]5s²4d¹⁰5p⁶', eletroneg: '2,6', estado: 'Gasoso', categoria: 'Gás Nobre', descoberta: '1898', cor: 'bg-gas-nobre', linha: 5, coluna: 18, descricao: 'Usado em lâmpadas de flash, lasers e como anestésico em medicina. Forma compostos, apesar de ser um gás nobre.' },

    { numero: 55, simbolo: 'Cs', nome: 'Césio', massa: '132,9', config: '[Xe]6s¹', eletroneg: '0,79', estado: 'Sólido', categoria: 'Metal Alcalino', descoberta: '1860', cor: 'bg-metal-alcalino', linha: 6, coluna: 1, descricao: 'Metal mais eletropositivo e reativo. Usado em relógios atômicos de alta precisão.' },
    { numero: 56, simbolo: 'Ba', nome: 'Bário', massa: '137,3', config: '[Xe]6s²', eletroneg: '0,89', estado: 'Sólido', categoria: 'Metal Alcalino-Terroso', descoberta: '1774', cor: 'bg-metal-alcalino-terroso', linha: 6, coluna: 2, descricao: 'Usado em contrastes para raios-X, fogos de artifício (cor verde) e perfuração de poços de petróleo.' },
    { numero: 57, simbolo: 'La', nome: 'Lantânio', massa: '138,9', config: '[Xe]6s²5d¹', eletroneg: '1,1', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1839', cor: 'bg-lantanideo', linha: 8, coluna: 3, descricao: 'Primeiro elemento da série dos lantanídeos. Usado em baterias de hidreto metálico e em óptica.' },
    { numero: 58, simbolo: 'Ce', nome: 'Cério', massa: '140,1', config: '[Xe]6s²4f¹5d¹', eletroneg: '1,12', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1803', cor: 'bg-lantanideo', linha: 8, coluna: 4, descricao: 'Terra rara mais abundante. Usado em catalisadores, pedras de isqueiro e como agente polidor.' },
    { numero: 59, simbolo: 'Pr', nome: 'Praseodímio', massa: '140,9', config: '[Xe]6s²4f³', eletroneg: '1,13', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1885', cor: 'bg-lantanideo', linha: 8, coluna: 5, descricao: 'Usado em ímãs forte e como corante em vidros e esmaltes (cor verde).' },
    { numero: 60, simbolo: 'Nd', nome: 'Neodímio', massa: '144,2', config: '[Xe]6s²4f⁴', eletroneg: '1,14', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1885', cor: 'bg-lantanideo', linha: 8, coluna: 6, descricao: 'Utilizado nos mais fortes ímãs permanentes (Nd-Fe-B) e em lasers.' },
    { numero: 61, simbolo: 'Pm', nome: 'Promécio', massa: '145,0', config: '[Xe]6s²4f⁵', eletroneg: '1,13', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1945', cor: 'bg-lantanideo', linha: 8, coluna: 7, descricao: 'Elemento radioativo sintético. Usado em baterias nucleares para satélites e sondas espaciais.' },
    { numero: 62, simbolo: 'Sm', nome: 'Samário', massa: '150,4', config: '[Xe]6s²4f⁶', eletroneg: '1,17', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1879', cor: 'bg-lantanideo', linha: 8, coluna: 8, descricao: 'Usado em ímãs de samário-cobalto, controle de reatores nucleares e tratamento do câncer.' },
    { numero: 63, simbolo: 'Eu', nome: 'Európio', massa: '152,0', config: '[Xe]6s²4f⁷', eletroneg: '1,2', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1901', cor: 'bg-lantanideo', linha: 8, coluna: 9, descricao: 'Usado em telas de TV, lâmpadas fluorescentes e na verificação de notas de euro.' },
    { numero: 64, simbolo: 'Gd', nome: 'Gadolínio', massa: '157,3', config: '[Xe]6s²4f⁷5d¹', eletroneg: '1,2', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1880', cor: 'bg-lantanideo', linha: 8, coluna: 10, descricao: 'Usado em contrastes para ressonância magnética e em barras de controle de reatores nucleares.' },
    { numero: 65, simbolo: 'Tb', nome: 'Térbio', massa: '158,9', config: '[Xe]6s²4f⁹', eletroneg: '1,2', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1843', cor: 'bg-lantanideo', linha: 8, coluna: 11, descricao: 'Usado em lâmpadas fluorescentes, lasers e dispositivos de armazenamento magnético.' },
    { numero: 66, simbolo: 'Dy', nome: 'Disprósio', massa: '162,5', config: '[Xe]6s²4f¹⁰', eletroneg: '1,22', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1886', cor: 'bg-lantanideo', linha: 8, coluna: 12, descricao: 'Componente de ímãs de neodímio para aumentar a resistência à desmagnetização em altas temperaturas.' },
    { numero: 67, simbolo: 'Ho', nome: 'Hólmio', massa: '164,9', config: '[Xe]6s²4f¹¹', eletroneg: '1,23', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1878', cor: 'bg-lantanideo', linha: 8, coluna: 13, descricao: 'Tem as propriedades magnéticas mais fortes de qualquer elemento. Usado em ímãs e em lasers médicos.' },
    { numero: 68, simbolo: 'Er', nome: 'Érbio', massa: '167,3', config: '[Xe]6s²4f¹²', eletroneg: '1,24', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1843', cor: 'bg-lantanideo', linha: 8, coluna: 14, descricao: 'Usado em amplificadores de fibra óptica para comunicações e em lasers dermatológicos.' },
    { numero: 69, simbolo: 'Tm', nome: 'Túlio', massa: '168,9', config: '[Xe]6s²4f¹³', eletroneg: '1,25', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1879', cor: 'bg-lantanideo', linha: 8, coluna: 15, descricao: 'Terra rara mais rara. Usado em equipamentos portáteis de raios-X e em lasers.' },
    { numero: 70, simbolo: 'Yb', nome: 'Itérbio', massa: '173,0', config: '[Xe]6s²4f¹⁴', eletroneg: '1,1', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1878', cor: 'bg-lantanideo', linha: 8, coluna: 16, descricao: 'Usado em relógios atômicos, lasers de alta potência e em ligas especiais.' },
    { numero: 71, simbolo: 'Lu', nome: 'Lutécio', massa: '175,0', config: '[Xe]6s²4f¹⁴5d¹', eletroneg: '1,27', estado: 'Sólido', categoria: 'Lantanídeo', descoberta: '1907', cor: 'bg-lantanideo', linha: 8, coluna: 17, descricao: 'Último elemento da série dos lantanídeos. Usado em catalisadores no refinamento de petróleo.' },
    { numero: 72, simbolo: 'Hf', nome: 'Háfnio', massa: '178,5', config: '[Xe]6s²4f¹⁴5d²', eletroneg: '1,3', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1923', cor: 'bg-metal-transicao', linha: 6, coluna: 4, descricao: 'Alto ponto de fusão, usado em ligas resistentes a altas temperaturas e em barras de controle nuclear.' },
    { numero: 73, simbolo: 'Ta', nome: 'Tântalo', massa: '180,9', config: '[Xe]6s²4f¹⁴5d³', eletroneg: '1,5', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1802', cor: 'bg-metal-transicao', linha: 6, coluna: 5, descricao: 'Resistente à corrosão, usado em equipamentos eletrônicos e implantes médicos.' },
    { numero: 74, simbolo: 'W', nome: 'Tungstênio', massa: '183,8', config: '[Xe]6s²4f¹⁴5d⁴', eletroneg: '2,36', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1783', cor: 'bg-metal-transicao', linha: 6, coluna: 6, descricao: 'Metal com o mais alto ponto de fusão. Usado em filamentos de lâmpadas e em ferramentas de corte.' },
    { numero: 75, simbolo: 'Re', nome: 'Rênio', massa: '186,2', config: '[Xe]6s²4f¹⁴5d⁵', eletroneg: '1,9', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1925', cor: 'bg-metal-transicao', linha: 6, coluna: 7, descricao: 'Um dos elementos mais raros na crosta terrestre. Usado em catalisadores e em ligas para alta temperatura.' },
    { numero: 76, simbolo: 'Os', nome: 'Ósmio', massa: '190,2', config: '[Xe]6s²4f¹⁴5d⁶', eletroneg: '2,2', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1803', cor: 'bg-metal-transicao', linha: 6, coluna: 8, descricao: 'Metal mais denso e com um dos pontos de fusão mais altos. Usado em pontas de canetas e contatos elétricos.' },
    { numero: 77, simbolo: 'Ir', nome: 'Irídio', massa: '192,2', config: '[Xe]6s²4f¹⁴5d⁷', eletroneg: '2,2', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1803', cor: 'bg-metal-transicao', linha: 6, coluna: 9, descricao: 'Metal extremamente resistente à corrosão. Usado em eletrodos de velas de ignição e como padrão de referência do metro.' },
    { numero: 78, simbolo: 'Pt', nome: 'Platina', massa: '195,1', config: '[Xe]6s¹4f¹⁴5d⁹', eletroneg: '2,28', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Pré-colombiana', cor: 'bg-metal-transicao', linha: 6, coluna: 10, descricao: 'Metal precioso usado em joalheria, catalisadores de automóveis e em tratamentos anticâncer.' },
    { numero: 79, simbolo: 'Au', nome: 'Ouro', massa: '197,0', config: '[Xe]6s¹4f¹⁴5d¹⁰', eletroneg: '2,54', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Pré-histórica', cor: 'bg-metal-transicao', linha: 6, coluna: 11, descricao: 'Metal precioso usado em joalheria, moedas e em eletrônica devido à excelente condutividade.' },
    { numero: 80, simbolo: 'Hg', nome: 'Mercúrio', massa: '200,6', config: '[Xe]6s²4f¹⁴5d¹⁰', eletroneg: '2,00', estado: 'Líquido', categoria: 'Metal de Transição', descoberta: 'Pré-histórica', cor: 'bg-metal-transicao', linha: 6, coluna: 12, descricao: 'Único metal líquido à temperatura ambiente. Usado em termômetros e interruptores elétricos. É tóxico.' },
    { numero: 81, simbolo: 'Tl', nome: 'Tálio', massa: '204,4', config: '[Xe]6s²4f¹⁴5d¹⁰6p¹', eletroneg: '1,62', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1861', cor: 'bg-metal-transicao', linha: 6, coluna: 13, descricao: 'Altamente tóxico. Foi usado em venenos para ratos e em detectores de radiação infravermelha.' },
    { numero: 82, simbolo: 'Pb', nome: 'Chumbo', massa: '207,2', config: '[Xe]6s²4f¹⁴5d¹⁰6p²', eletroneg: '2,33', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Pré-histórica', cor: 'bg-metal-transicao', linha: 6, coluna: 14, descricao: 'Metal denso usado em proteção contra radiação, baterias e antigamente em tintas. É tóxico.' },
    { numero: 83, simbolo: 'Bi', nome: 'Bismuto', massa: '209,0', config: '[Xe]6s²4f¹⁴5d¹⁰6p³', eletroneg: '2,02', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: 'Antiga', cor: 'bg-metal-transicao', linha: 6, coluna: 15, descricao: 'Metal com baixa toxicidade usado em produtos cosméticos, medicamentos e ligas de baixo ponto de fusão.' },
    { numero: 84, simbolo: 'Po', nome: 'Polônio', massa: '209,0', config: '[Xe]6s²4f¹⁴5d¹⁰6p⁴', eletroneg: '2,0', estado: 'Sólido', categoria: 'Semimetal', descoberta: '1898', cor: 'bg-semimetal', linha: 6, coluna: 16, descricao: 'Elemento radioativo extremamente raro e tóxico. Usado em eliminadores de estática e fontes de calor em sondas espaciais.' },
    { numero: 85, simbolo: 'At', nome: 'Ástato', massa: '210,0', config: '[Xe]6s²4f¹⁴5d¹⁰6p⁵', eletroneg: '2,2', estado: 'Sólido', categoria: 'Halogênio', descoberta: '1940', cor: 'bg-halogenio', linha: 6, coluna: 17, descricao: 'Elemento radioativo extremamente raro. É o halogênio mais raro e menos estável.' },
    { numero: 86, simbolo: 'Rn', nome: 'Radônio', massa: '222,0', config: '[Xe]6s²4f¹⁴5d¹⁰6p⁶', eletroneg: '2,2', estado: 'Gasoso', categoria: 'Gás Nobre', descoberta: '1900', cor: 'bg-gas-nobre', linha: 6, coluna: 18, descricao: 'Gás nobre radioativo. Pode acumular-se em porões de casas e representa um risco para a saúde quando inalado.' },

    { numero: 87, simbolo: 'Fr', nome: 'Frâncio', massa: '223,0', config: '[Rn]7s¹', eletroneg: '0,7', estado: 'Sólido', categoria: 'Metal Alcalino', descoberta: '1939', cor: 'bg-metal-alcalino', linha: 7, coluna: 1, descricao: 'Elemento radioativo extremamente raro e instável. É o metal alcalino mais pesado.' },
    { numero: 88, simbolo: 'Ra', nome: 'Rádio', massa: '226,0', config: '[Rn]7s²', eletroneg: '0,9', estado: 'Sólido', categoria: 'Metal Alcalino-Terroso', descoberta: '1898', cor: 'bg-metal-alcalino-terroso', linha: 7, coluna: 2, descricao: 'Elemento radioativo que emite um brilho azulado. Já foi usado em tintas luminescentes e em tratamentos médicos.' },
    { numero: 89, simbolo: 'Ac', nome: 'Actínio', massa: '227,0', config: '[Rn]7s²6d¹', eletroneg: '1,1', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1899', cor: 'bg-actinideo', linha: 9, coluna: 3, descricao: 'Elemento radioativo que dá nome à série dos actinídeos. Brilha no escuro com uma luz azulada.' },
    { numero: 90, simbolo: 'Th', nome: 'Tório', massa: '232,0', config: '[Rn]7s²6d²', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1828', cor: 'bg-actinideo', linha: 9, coluna: 4, descricao: 'Metal radioativo usado como combustível em reatores nucleares experimentais.' },
    { numero: 91, simbolo: 'Pa', nome: 'Protactínio', massa: '231,0', config: '[Rn]7s²5f²6d¹', eletroneg: '1,5', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1913', cor: 'bg-actinideo', linha: 9, coluna: 5, descricao: 'Elemento radioativo raro, um dos mais escassos na crosta terrestre.' },
    { numero: 92, simbolo: 'U', nome: 'Urânio', massa: '238,0', config: '[Rn]7s²5f³6d¹', eletroneg: '1,38', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1789', cor: 'bg-actinideo', linha: 9, coluna: 6, descricao: 'Metal radioativo denso usado como combustível em reatores nucleares e em armas nucleares.' },
    { numero: 93, simbolo: 'Np', nome: 'Neptúnio', massa: '237,0', config: '[Rn]7s²5f⁴6d¹', eletroneg: '1,36', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1940', cor: 'bg-actinideo', linha: 9, coluna: 7, descricao: 'Primeiro elemento transurânico a ser produzido. Usado em detectores de nêutrons.' },
    { numero: 94, simbolo: 'Pu', nome: 'Plutônio', massa: '244,0', config: '[Rn]7s²5f⁶', eletroneg: '1,28', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1940', cor: 'bg-actinideo', linha: 9, coluna: 8, descricao: 'Elemento radioativo usado em armas nucleares e em alguns reatores nucleares experimentais.' },
    { numero: 95, simbolo: 'Am', nome: 'Amerício', massa: '243,0', config: '[Rn]7s²5f⁷', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1944', cor: 'bg-actinideo', linha: 9, coluna: 9, descricao: 'Usado em detectores de fumaça e como fonte portátil de raios gama.' },
    { numero: 96, simbolo: 'Cm', nome: 'Cúrio', massa: '247,0', config: '[Rn]7s²5f⁷6d¹', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1944', cor: 'bg-actinideo', linha: 9, coluna: 10, descricao: 'Elemento sintético radioativo utilizado em geradores termoelétricos para missões espaciais.' },
    { numero: 97, simbolo: 'Bk', nome: 'Berquélio', massa: '247,0', config: '[Rn]7s²5f⁹', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1949', cor: 'bg-actinideo', linha: 9, coluna: 11, descricao: 'Elemento sintético radioativo sem aplicações comerciais conhecidas.' },
    { numero: 98, simbolo: 'Cf', nome: 'Califórnio', massa: '251,0', config: '[Rn]7s²5f¹⁰', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1950', cor: 'bg-actinideo', linha: 9, coluna: 12, descricao: 'Utilizado como fonte de nêutrons para análise de materiais e tratamento de câncer.' },
    { numero: 99, simbolo: 'Es', nome: 'Einstênio', massa: '252,0', config: '[Rn]7s²5f¹¹', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1952', cor: 'bg-actinideo', linha: 9, coluna: 13, descricao: 'Elemento sintético radioativo sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 100, simbolo: 'Fm', nome: 'Férmio', massa: '257,0', config: '[Rn]7s²5f¹²', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1952', cor: 'bg-actinideo', linha: 9, coluna: 14, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 101, simbolo: 'Md', nome: 'Mendelévio', massa: '258,0', config: '[Rn]7s²5f¹³', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1955', cor: 'bg-actinideo', linha: 9, coluna: 15, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 102, simbolo: 'No', nome: 'Nobélio', massa: '259,0', config: '[Rn]7s²5f¹⁴', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1958', cor: 'bg-actinideo', linha: 9, coluna: 16, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 103, simbolo: 'Lr', nome: 'Laurêncio', massa: '266,0', config: '[Rn]7s²5f¹⁴7p¹', eletroneg: '1,3', estado: 'Sólido', categoria: 'Actinídeo', descoberta: '1961', cor: 'bg-actinideo', linha: 9, coluna: 17, descricao: 'Último elemento da série dos actinídeos sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 104, simbolo: 'Rf', nome: 'Rutherfórdio', massa: '267,0', config: '[Rn]7s²5f¹⁴6d²', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1969', cor: 'bg-metal-transicao', linha: 7, coluna: 4, descricao: 'Primeiro elemento transactinídeo, também chamado de elemento superpesado.' },
    { numero: 105, simbolo: 'Db', nome: 'Dúbnio', massa: '268,0', config: '[Rn]7s²5f¹⁴6d³', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1970', cor: 'bg-metal-transicao', linha: 7, coluna: 5, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 106, simbolo: 'Sg', nome: 'Seabórgio', massa: '269,0', config: '[Rn]7s²5f¹⁴6d⁴', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1974', cor: 'bg-metal-transicao', linha: 7, coluna: 6, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 107, simbolo: 'Bh', nome: 'Bóhrio', massa: '270,0', config: '[Rn]7s²5f¹⁴6d⁵', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1981', cor: 'bg-metal-transicao', linha: 7, coluna: 7, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 108, simbolo: 'Hs', nome: 'Hássio', massa: '269,0', config: '[Rn]7s²5f¹⁴6d⁶', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1984', cor: 'bg-metal-transicao', linha: 7, coluna: 8, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 109, simbolo: 'Mt', nome: 'Meitnério', massa: '278,0', config: '[Rn]7s²5f¹⁴6d⁷', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1982', cor: 'bg-metal-transicao', linha: 7, coluna: 9, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 110, simbolo: 'Ds', nome: 'Darmstádtio', massa: '281,0', config: '[Rn]7s²5f¹⁴6d⁸', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1994', cor: 'bg-metal-transicao', linha: 7, coluna: 10, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 111, simbolo: 'Rg', nome: 'Roentgênio', massa: '282,0', config: '[Rn]7s²5f¹⁴6d⁹', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1994', cor: 'bg-metal-transicao', linha: 7, coluna: 11, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 112, simbolo: 'Cn', nome: 'Copernício', massa: '285,0', config: '[Rn]7s²5f¹⁴6d¹⁰', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1996', cor: 'bg-metal-transicao', linha: 7, coluna: 12, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 113, simbolo: 'Nh', nome: 'Nihônio', massa: '286,0', config: '[Rn]7s²5f¹⁴6d¹⁰7p¹', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '2003', cor: 'bg-metal-transicao', linha: 7, coluna: 13, descricao: 'Elemento sintético sem aplicações práticas conhecidas. Nome derivado de Nihon (Japão).' },
    { numero: 114, simbolo: 'Fl', nome: 'Fleróvio', massa: '289,0', config: '[Rn]7s²5f¹⁴6d¹⁰7p²', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '1998', cor: 'bg-metal-transicao', linha: 7, coluna: 14, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 115, simbolo: 'Mc', nome: 'Moscóvio', massa: '290,0', config: '[Rn]7s²5f¹⁴6d¹⁰7p³', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '2003', cor: 'bg-metal-transicao', linha: 7, coluna: 15, descricao: 'Elemento sintético sem aplicações práticas conhecidas. Nome derivado de Moscou (Rússia).' },
    { numero: 116, simbolo: 'Lv', nome: 'Livermório', massa: '293,0', config: '[Rn]7s²5f¹⁴6d¹⁰7p⁴', eletroneg: '-', estado: 'Sólido', categoria: 'Metal de Transição', descoberta: '2000', cor: 'bg-metal-transicao', linha: 7, coluna: 16, descricao: 'Elemento sintético sem aplicações práticas conhecidas além da pesquisa científica.' },
    { numero: 117, simbolo: 'Ts', nome: 'Tenesso', massa: '294,0', config: '[Rn]7s²5f¹⁴6d¹⁰7p⁵', eletroneg: '-', estado: 'Sólido', categoria: 'Halogênio', descoberta: '2010', cor: 'bg-halogenio', linha: 7, coluna: 17, descricao: 'Elemento sintético sem aplicações práticas conhecidas. Nome derivado de Tennessee (EUA).' },
    { numero: 118, simbolo: 'Og', nome: 'Oganessônio', massa: '294,0', config: '[Rn]7s²5f¹⁴6d¹⁰7p⁶', eletroneg: '-', estado: 'Sólido', categoria: 'Gás Nobre', descoberta: '2002', cor: 'bg-gas-nobre', linha: 7, coluna: 18, descricao: 'Elemento mais pesado conhecido. Acredita-se ser um gás nobre, mas pode ter propriedades diferentes devido à sua massa.' }
];

// Função para criar o layout da tabela periódica
function criarTabelaPeriodica() {
    const tabelaContainer = document.querySelector('.tabela-periodica');
    const lantanideosActinideosContainer = document.querySelector('.lantanideos-actinideos');
    
    // Criar uma matriz 7x18 para a tabela principal
    const matriz = Array(7).fill().map(() => Array(18).fill(null));
    
    // Preencher a matriz com os elementos no lugar correto
    elementos.forEach(elemento => {
        if ((elemento.numero >= 57 && elemento.numero <= 71) || (elemento.numero >= 89 && elemento.numero <= 103)) {
            return; // Lantanídeos e Actinídeos serão adicionados separadamente
        }
        
        if (elemento.linha <= 7 && elemento.coluna <= 18) {
            matriz[elemento.linha - 1][elemento.coluna - 1] = elemento;
        }
    });
    
    // Renderizar a tabela principal
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 18; j++) {
            const elementoDiv = document.createElement('div');
            
            if (matriz[i][j]) {
                const el = matriz[i][j];
                elementoDiv.classList.add('elemento', el.cor);
                elementoDiv.setAttribute('data-numero', el.numero);
                
                elementoDiv.innerHTML = `
                    <div class="numero text-xs">${el.numero}</div>
                    <div class="simbolo text-lg font-bold">${el.simbolo}</div>
                    <div class="nome text-xs truncate max-w-full px-1">${el.nome}</div>
                    <div class="massa text-xs">${el.massa}</div>
                `;
            } else {
                elementoDiv.classList.add('elemento', 'vazio');
            }
            
            tabelaContainer.appendChild(elementoDiv);
        }
    }
    
    // Renderizar os Lantanídeos e Actinídeos
    const lantanideos = elementos.filter(el => el.numero >= 57 && el.numero <= 71);
    const actinideos = elementos.filter(el => el.numero >= 89 && el.numero <= 103);
    
    [...lantanideos, ...actinideos].forEach(el => {
        const elementoDiv = document.createElement('div');
        elementoDiv.classList.add('elemento', el.cor);
        elementoDiv.setAttribute('data-numero', el.numero);
        
        elementoDiv.innerHTML = `
            <div class="numero text-xs">${el.numero}</div>
            <div class="simbolo text-sm font-bold">${el.simbolo}</div>
            <div class="nome text-xs truncate max-w-full px-1">${el.nome}</div>
            <div class="massa text-xs">${el.massa}</div>
        `;
        
        lantanideosActinideosContainer.appendChild(elementoDiv);
    });
}

// Criar a tabela quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    criarTabelaPeriodica();
    
    // Event listeners para interatividade
    document.querySelectorAll('.elemento:not(.vazio)').forEach(el => {
        el.addEventListener('click', () => {
            const numero = el.getAttribute('data-numero');
            const elemento = elementos.find(e => e.numero === parseInt(numero));
            
            if (elemento) {
                abrirModal(elemento);
            }
        });
    });
    
    // Fechar modal
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('elementModal').classList.add('hidden');
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('elementModal').classList.add('hidden');
        }
    });
    
    // Clicar fora para fechar modal
    document.getElementById('elementModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('elementModal')) {
            document.getElementById('elementModal').classList.add('hidden');
        }
    });
});

// Função para abrir o modal com detalhes do elemento
function abrirModal(elemento) {
    const modal = document.getElementById('elementModal');
    const header = document.getElementById('elementHeader');
    
    // Preencher dados
    document.getElementById('elementSymbol').textContent = elemento.simbolo;
    document.getElementById('elementNumber').textContent = elemento.numero;
    document.getElementById('elementName').textContent = elemento.nome;
    document.getElementById('elementMass').textContent = elemento.massa;
    document.getElementById('elementConfig').textContent = elemento.config;
    document.getElementById('elementEn').textContent = elemento.eletroneg;
    document.getElementById('elementState').textContent = elemento.estado;
    document.getElementById('elementCategory').textContent = elemento.categoria;
    document.getElementById('elementDiscovery').textContent = elemento.descoberta;
    document.getElementById('elementDescription').textContent = elemento.descricao;
    
    // Definir cor do cabeçalho baseado na categoria
    header.className = elemento.cor + ' p-4 text-white';
    
    // Mostrar modal
    modal.classList.remove('hidden');
}

// Verificar modo escuro
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});
