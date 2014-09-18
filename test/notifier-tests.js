
/*
 * MOCHA TESTS
 * http://visionmedia.github.com/mocha/
 */

var assert = require('assert');
//var await = require('await');
var Stoar = require('../index');

describe('dispatcher', function(){

  it('should work', function(){
    var dsp = Stoar.dispatcher()
    var not = dsp.notifier()
    assert.ok(not)
  })

  it('should not work twice', function(){
    var dsp = Stoar.dispatcher()
    var not1 = dsp.notifier()
    assert.throws(function(){
      var not2 = dsp.notifier()
    })
  })

  it('should notify', function(done){
    var dsp = Stoar.dispatcher()
    var cmd = dsp.commander()
    var st = dsp.store({foo:1}, function(action, payload){
      if (action === 'yes'){
        st.set('foo', 2)
      }
    })
    var not = dsp.notifier()
    not.on('change', function(){
      done()
    })
    cmd.send('yes')
  })
})











