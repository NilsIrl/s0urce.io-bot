
function fillForm () {
    var splittedTool = document.getElementsByClassName('tool-type-img')[0].getAttribute('src').split('/')
    var id = splittedTool[4] + splittedTool[5]

    var result = ''
    console.log(id)

    switch(id) {
        case 'h0':
            result = 'joinnetworkclient'
            break
        case 'h1':
            result = 'wordcounter'
            break
        case 'h2':
            result = 'getmysqldomain'
            break
        case 'h3':
            result = 'dodecahedron'
            break
        case 'h4':
            result = 'statusofprocess'
            break
        case 'h5':
            result = 'disconnectserver'
            break
        case 'h6':
            result = 'loadloggedpassword'
            break
        case 'h7':
            result = 'create3axisvector'
            break
        case 'h8':
            result = 'removenewcookie'
            break
        case 'h9':
            result = 'tempdatapass'
            break
        case 'h10':
            result = 'respondertimeout'
            break
        case 'h11':
            result = 'getdatapassword'
            break
        case 'h12':
            result = 'encryptunpackedbatch'
            break
        case 'h13':
            result = 'getxmlprotocol'
            break
        case 'h14':
            result = 'uploaduserstats'
            break
        case 'h15':
            result = 'blockthreat'
            break
        case 'h16':
            result = 'channelsetpackage'
            break
        case 'h17':
            result = 'encodenewfolder'
            break
        case 'h18':
            result = 'fileexpresslog'
            break
        case 'h19':
            result = 'destroybatch'
            break
        case 'h20':
            result = 'getpartoffile'
            break
        case 'h21':
            result = 'create2axisvector'
            break
        case 'h22':
            result = 'sendintelpass'
            break
        case 'h23':
            result = 'generatecodepack'
            break
        case 'h24':
            result = 'disconnectchannel'
            break
        case 'h25':
            result = 'httpbuffersize'
            break
        case 'h26':
            result = 'loadaltevent'
            break
        case 'h27':
            result = 'ghostfilesystem'
            break
        case 'h28':
            result = 'patcheventlog'
            break
        case 'h29':
            result = 'includedirectory'
            break
        case 'h30':
            result = 'systemportkey'
            break
        case 'h31':
            result = 'createnewpackage'
            break
        case 'h32':
            result = 'eventlistdir'
            break
        case 'h33':
            result = 'changeusername'
            break
        case 'h34':
            result = 'bufferpingset'
            break
        case 'h35':
            result = 'batchallfiles'
            break
        case 'h36':
            result = 'callmodule'
            break
        case 'h37':
            result = 'deleteallids'
            break
        case 'h38':
            result = 'setnewproxy'
            break
        case 'h39':
            result = 'emitconfiglist'
            break
        case 'h40':
            result = 'mergesocket'
            break
        case 'h41':
            result = 'createnewsocket'
            break
        case 'h42':
            result = 'loadregisterlist'
            break
        case 'h43':
            result = 'getfirewallchannel'
            break
        case 'h44':
            result = 'removeoldcookie'
            break
        case 'h45':
            result = 'decryptdatabatch'
            break
        case 'h46':
            result = 'exportconfigpackage'
            break
        case 'h47':
            result = 'sizeofhexagon'
            break
        case 'h48':
            result = 'createfilethread'
            break
        case 'h49':
            result = 'hostnewserver'
            break
        case 'h50':
            result = 'systemgridtype'
            break
        case 'h51':
            result = 'checkhttptype'
            break
        case 'h52':
            result = 'unpacktmpfile'
            break
        case 'h53':
            result = 'changepassword'
            break
        case 'h54':
            result = 'rootcookieset'
            break
        case 'm0':
            result = 'server'
            break
        case 'm1':
            result = 'getkey'
            break
        case 'm2':
            result = 'mysql'
            break
        case 'm3':
            result = 'generate'
            break
        case 'm4':
            result = 'thread'
            break
        case 'm5':
            result = 'setport'
            break
        case 'm6':
            result = 'eventtype'
            break
        case 'm7':
            result = 'filedir'
            break
        case 'm8':
            result = 'responder'
            break
        case 'm9':
            result = 'encode'
            break
        case 'm10':
            result = 'urlcheck'
            break
        case 'm11':
            result = 'threat'
            break
        case 'm12':
            result = 'username'
            break
        case 'm13':
            result = 'getinfo'
            break
        case 'm14':
            result = 'getlog'
            break
        case 'm15':
            result = 'number'
            break
        case 'm16':
            result = 'setcookie'
            break
        case 'm17':
            result = 'protocol'
            break
        case 'm18':
            result = 'fillgrid'
            break
        case 'm19':
            result = 'setnewid'
            break
        case 'm20':
            result = 'package'
            break
        case 'm21':
            result = 'userport'
            break
        case 'm22':
            result = 'loadbytes'
            break
        case 'm23':
            result = 'getid'
            break
        case 'm24':
            result = 'filetype'
            break
        case 'm25':
            result = 'decrypt'
            break
        case 'm26':
            result = 'encryptfile'
            break
        case 'm27':
            result = 'length'
            break
        case 'm28':
            result = 'proxy'
            break
        case 'm29':
            result = 'gridwidth'
            break
        case 'm30':
            result = 'password'
            break
        case 'm31':
            result = 'getping'
            break
        case 'm32':
            result = 'getfile'
            break
        case 'm33':
            result = 'command'
            break
        case 'm34':
            result = 'encrypt'
            break
        case 'm35':
            result = 'download'
            break
        case 'm36':
            result = 'constructor'
            break
        case 'm37':
            result = 'userid'
            break
        case 'm38':
            result = 'export'
            break
        case 'm39':
            result = 'account'
            break
        case 'm40':
            result = 'newhost'
            break
        case 'm41':
            result = 'decryptfile'
            break
        case 'm42':
            result = 'setping'
            break
        case 'm43':
            result = 'vector'
            break
        case 'm44':
            result = 'findpackage'
            break
        case 'm45':
            result = 'datatype'
            break
        case 'm46':
            result = 'channel'
            break
        case 'm47':
            result = 'serverproxy'
            break
        case 'm48':
            result = 'disconnect'
            break
        case 'm49':
            result = 'hostserver'
            break
        case 'm50':
            result = 'config'
            break
        case 'm51':
            result = 'gridheight'
            break
        case 'm52':
            result = 'getpass'
            break
        case 'm53':
            result = 'writefile'
            break
        case 'm54':
            result = 'accountname'
            break
        case 'm55':
            result = 'hexagon'
            break
        case 'm56':
            result = 'connect'
            break
        case 'm57':
            result = 'response'
            break
        case 'm58':
            result = 'process'
            break
        case 'm59':
            result = 'syscall'
            break
        case 'm60':
            result = 'module'
            break
        case 'm61':
            result = 'newserver'
            break
        case 'm62':
            result = 'sizeof'
            break
        case 'm63':
            result = 'listconfig'
            break
        case 'm64':
            result = 'newline'
            break
        case 'm65':
            result = 'setstats'
            break
        case 'e0':
            result = 'event'
            break
        case 'e1':
            result = 'bit'
            break
        case 'e2':
            result = 'file'
            break
        case 'e3':
            result = 'global'
            break
        case 'e4':
            result = 'status'
            break
        case 'e5':
            result = 'host'
            break
        case 'e6':
            result = 'ping'
            break
        case 'e7':
            result = 'root'
            break
        case 'e8':
            result = 'xml'
            break
        case 'e9':
            result = 'get'
            break
        case 'e10':
            result = 'load'
            break
        case 'e11':
            result = 'dir'
            break
        case 'e12':
            result = 'join'
            break
        case 'e13':
            result = 'pass'
            break
        case 'e14':
            result = 'left'
            break
        case 'e15':
            result = 'port'
            break
        case 'e16':
            result = 'right'
            break
        case 'e17':
            result = 'domain'
            break
        case 'e18':
            result = 'count'
            break
        case 'e19':
            result = 'handle'
            break
        case 'e20':
            result = 'init'
            break
        case 'e21':
            result = 'emit'
            break
        case 'e22':
            result = 'socket'
            break
        case 'e23':
            result = 'cookies'
            break
        case 'e24':
            result = 'size'
            break
        case 'e25':
            result = 'data'
            break
        case 'e26':
            result = 'net'
            break
        case 'e27':
            result = 'add'
            break
        case 'e28':
            result = 'val'
            break
        case 'e29':
            result = 'ghost'
            break
        case 'e30':
            result = 'buffer'
            break
        case 'e31':
            result = 'point'
            break
        case 'e32':
            result = 'info'
            break
        case 'e33':
            result = 'reset'
            break
        case 'e34':
            result = 'set'
            break
        case 'e35':
            result = 'num'
            break
        case 'e36':
            result = 'log'
            break
        case 'e37':
            result = 'part'
            break
        case 'e38':
            result = 'temp'
            break
        case 'e39':
            result = 'call'
            break
        case 'e40':
            result = 'key'
            break
        case 'e41':
            result = 'intel'
            break
        case 'e42':
            result = 'type'
            break
        case 'e43':
            result = 'signal'
            break
        case 'e44':
            result = 'add'
            break
        case 'e45':
            result = 'bytes'
            break
        case 'e46':
            result = 'http'
            break
        case 'e47':
            result = 'send'
            break
        case 'e48':
            result = 'write'
            break
        case 'e49':
            result = 'loop'
            break
        case 'e50':
            result = 'upload'
            break
        case 'e51':
            result = 'remove'
            break
        case 'e52':
            result = 'com'
            break
        case 'e53':
            result = 'poly'
            break
        case 'e54':
            result = 'stat'
            break
        case 'e55':
            result = 'delete'
            break
        case 'e56':
            result = 'client'
            break
        case 'e57':
            result = 'anon'
            break
        case 'e58':
            result = 'user'
            break
        case 'e59':
            result = 'system'
            break
        case 'e60':
            result = 'list'
            break
        case 'e61':
            result = 'url'
            break
        default:
            result = null
    }

    if (result != null) {
        $('#tool-type-word').val(result)
        $('#tool-type-form').submit()
    } else {
        return false
    }
    return true
}

function clearScreen() {
    if (document.getElementById('topwindow-success').style.display != 'none') {
        document.getElementById('targetmessage-button-send').click()
    }

}

function autoChoose() {
    var noPlayer = document.getElementById('player-list').childNodes.length
    var selectedPlayer = document.getElementById('player-list').childNodes[parseInt(noPlayer*Math.random())]
    selectedPlayer.click();
    document.getElementById('window-other-button').click()
    document.getElementById('window-other-port'+parseInt(3*Math.random())).click()

}

function main() {
    if (fillForm() == false) {
        clearScreen();
        autoChoose();
    }

}

var interval = setInterval(main, 750);

