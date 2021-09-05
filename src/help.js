const help = (prefix) => {
	return `> *Sticker Comandos* <
command : *${prefix}sticker* ou *${prefix}stiker*
desc : converter image/gif/video para sticker
usage : responder image/gif/video, ou enviar image/gif/video com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem para sticker ao remover o fundo
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}toimg*
desc : converter sticker para a imagem
usage : responder sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto para sticker
usage : *${prefix}tsticker texto aqui*\n
> *Meme Commands* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : apenas envie o comando\n
> *Outros Comandos* <
command : *${prefix}tp*
desc : Texto / Logo fabricante de textpro.me
usage : *${prefix}tp [no] [text]*\nexample : *${prefix}tp 1 YourText*
note : *${prefix}tp list* ( para mostrar todo o tema )\n
command : *${prefix}ep*
desc : Texto / Logo fabricante de ephoto360.com
usage : *${prefix}ep [no] [text]*\nexample : *${prefix}ep 1 YourText*
note : *${prefix}ep list* (  para mostrar todo o tema )\n
command : *${prefix}tahta*
desc : Harta Tahta .....
usage : *${prefix}tahta [text]*\nexample : *${prefix}tahta YourText*\n
command : *${prefix}gtts*
desc : converter text to speech/audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage : apenas envie o comando\n
command : *${prefix}url2img*
desc : tirar capturas de tela da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}wait*
desc : pesquisar anime com imagem [Que anime é isso / aquilo]
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}setprefix*
desc : substitua o prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comando só pode ser usado pelo proprietário do bot\n
> *Group Comands* <
command : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}adicionar 55449xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}kick*
desc : chutar membros do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usage : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}leave*
desc : Faça o bot sair do grupo
usage : apenas envie o comando
note : Só pode ser usado por administradores de grupo e proprietário do bot\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador de grupo\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1 * para ativar o modo simi e *${prefix}simih 0 * para desativar o modo simi
note : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
