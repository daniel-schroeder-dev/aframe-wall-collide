AFRAME.registerComponent('wall-collide', {
	schema: {
		pushAxis: {
			type: 'string',
		},
		pushDirection: {
			type: 'number',
		},
		pushStrength: {
			type: 'number',
		},
		pushTarget: {
			type: 'selector',
		},
	},
  init: function() {
  	this.el.addEventListener('hitstart', () => this.push());
  },
  push: function() {
  	this.data.pushTarget.object3D.position[this.data.pushAxis] += this.data.pushStrength * this.data.pushDirection;
  }
});
