exports.cargaVentana = function(data) {
	var ventana = Ti.UI.createWindow({
		theme : 'Theme.AppCompat.NoTitleBar',
		layout : 'vertical'
	});

	/*
	 ***********************************VISTA SUPERIOR***********************************
	*/
	
	
	var vista_top = Ti.UI.createView({
		backgroundColor : 'black',
		height : '45%',
		width : '100%',
		layout : 'vertical'
	});
	var vista_top_info = Ti.UI.createView({
		backgroundColor : 'white',
		height : '25%',
		width : '100%',
		layout : 'horizontal'
	});
	var view_sep1 = Ti.UI.createView({
		backgroundColor : 'gray',
		height : '80%',
		width : '.33%'
	});
	var view_sep2 = Ti.UI.createView({
		backgroundColor : 'gray',
		height : '80%',
		width : '.33%'
	});
	var lblF_T1 = Ti.UI.createLabel({
		text : data[0].user.statuses_count,
		font : {
			fontSize : '25'
		},
		color : 'black'
	});
	var lblF_T2 = Ti.UI.createLabel({
		text : 'Tweets',
		font : {
			fontSize : '18'
		},
		color : 'black'
	});
	var lblF_F1 = Ti.UI.createLabel({
		text : data[0].user.friends_count,
		font : {
			fontSize : '25'
		},
		color : 'black'
	});
	var lblF_F2 = Ti.UI.createLabel({
		text : 'Following',
		font : {
			fontSize : '18'
		},
		color : 'black'
	});
	var lblF_2 = Ti.UI.createLabel({
		text : 'Followers',
		font : {
			fontSize : '18'
		},
		color : 'black'
	});
	var lblF_1 = Ti.UI.createLabel({
		text : data[0].user.followers_count,
		font : {
			fontSize : '25'
		},
		color : 'black'
	});

	var view_info1 = Ti.UI.createView({
		backgroundColor : 'white',
		width : '33%',
		height : '100%',
		layout : 'vertical'
	});
	view_info1.add(lblF_T2);
	view_info1.add(lblF_T1);

	var view_info2 = Ti.UI.createView({
		backgroundColor : 'white',
		width : '33%',
		height : '100%',
		layout : 'vertical'
	});
	view_info2.add(lblF_F2);
	view_info2.add(lblF_F1);
	var view_info3 = Ti.UI.createView({
		backgroundColor : 'white',
		width : '33%',
		height : '100%',
		layout : 'vertical'
	});
	view_info3.add(lblF_2);
	view_info3.add(lblF_1);

	var vista_top_perfil = Ti.UI.createView({
		backgroundImage : data[0].user.profile_background_image_url,
		//backgroundColor : 'red',
		height : '75%',
		width : '100%',
		layout : 'vertical'
	});
	var view_separator = Ti.UI.createView({
		backgroundColor : 'transparent',
		height : '25%',
		width : '100%'
	});
	var img_view = Ti.UI.createImageView({
		image : data[0].user.profile_image_url,
		height : '60dp',
		width : '60dp',
		borderRadius : '30dp'
	});
	var lbl_username = Ti.UI.createLabel({
		text : data[0].user.name,
		color : 'white',
		font : {
			fontSize : '16'
		}
	});
	var lbl_username_short = Ti.UI.createLabel({
		text : "@"+data[0].user.screen_name,
		color : '#FAFAFA',
		font : {
			fontSize : '10'
		}
	});

	vista_top_perfil.add(view_separator);
	vista_top_perfil.add(img_view);
	vista_top_perfil.add(lbl_username);
	vista_top_perfil.add(lbl_username_short);

	vista_top.add(vista_top_perfil);
	vista_top_info.add(view_info1);
	vista_top_info.add(view_sep1);
	vista_top_info.add(view_info2);
	vista_top_info.add(view_sep2);
	vista_top_info.add(view_info3);
	vista_top.add(vista_top_info);
	ventana.add(vista_top);

	/*
	 ***********************************VISTA INFERIOR***********************************
	*/
	var scroll_view = Ti.UI.createScrollView({
		backgroundColor : '#F2F2F2',
		height : '55%',
		width : '100%',
		layout : 'vertical'
	});


	//Creando las vistas de manera dinamica
	for (var i = 0; i < data.length; i++) {
		var lbl_r = Ti.UI.createLabel({
			text : 'Reply',
			color : '#5E5E5E',
			top : '12dp'
		});
		var lbl_re = Ti.UI.createLabel({
			text : 'Retweet',
			color : '#5E5E5E',
			top : '12dp'
		});
		var lbl_f = Ti.UI.createLabel({
			text : 'Favorite',
			color : '#5E5E5E',
			top : '12dp'
		});
		var img_view_r = Ti.UI.createImageView({
			height : '15dp',
			width : '15dp',
			image : '/images/reply.png',
			top : '15dp',
			left : '25dp'
		});
		var img_view_re = Ti.UI.createImageView({
			height : '15dp',
			width : '15dp',
			image : '/images/ret.png',
			top : '15dp',
			left : '15dp'
		});
		var img_view_fa = Ti.UI.createImageView({
			height : '15dp',
			width : '15dp',
			image : '/images/star.png',
			top : '15dp',
			left : '15dp'
		});
		var img_view_f = Ti.UI.createImageView({
			image : data[i].user.profile_image_url,
			left : '2dp',
			top : '2dp',
			height : '30dp',
			width : '30dp',
			borderRadius : '15dp'
		});
		var lbl_nombre = Ti.UI.createLabel({
			text : data[i].user.screen_name,
			color : 'black',
			left : '37dp',
			top : '5dp'
		});
		var lbl_texto = Ti.UI.createLabel({
			text : data[i].text,
			color : 'black',
			left : '2dp',
			top : 0
		});
		var view_tweet_1 = Ti.UI.createView({
			backgroundColor : 'transparent',
			height : '30%',
			width : '100%',
			layout : 'Horizontal'
		});
		var view_tweet_2 = Ti.UI.createView({
			backgroundColor : 'transparent',
			height : '45%',
			width : '100%',
			layout : 'Horizontal'
		});
		var view_sep_t1 = Ti.UI.createView({
			backgroundColor : '#A4A4A4',
			height : '80%',
			width : '.33%'
		});
		var view_sep_t2 = Ti.UI.createView({
			backgroundColor : '#A4A4A4',
			height : '80%',
			width : '.33%'
		});
		var view_btn_tweet1 = Ti.UI.createView({
			backgroundColor : '#D8D8D8',
			height : '100%',
			width : '33%',
			layout : 'horizontal'
		});
		var view_btn_tweet2 = Ti.UI.createView({
			backgroundColor : '#D8D8D8',
			height : '100%',
			width : '33%',
			layout : 'horizontal'
		});
		var view_btn_tweet3 = Ti.UI.createView({
			backgroundColor : '#D8D8D8',
			height : '100%',
			width : '25%',
			layout : 'horizontal'
		});
		var view_tweet_3 = Ti.UI.createView({
			backgroundColor : '#D8D8D8',
			height : '30%',
			width : '100%',
			layout : 'horizontal'
		});
		var view_tweet = Ti.UI.createView({
			backgroundColor : 'white',
			top : '8dp',
			height : '200dp',
			width : '95%',
			layout : 'vertical'
		});
		view_tweet_1.add(img_view_f);
		view_tweet_1.add(lbl_nombre);
		view_tweet_2.add(lbl_texto);

		view_btn_tweet1.add(img_view_r);
		view_btn_tweet1.add(lbl_r);
		view_btn_tweet2.add(img_view_re);
		view_btn_tweet2.add(lbl_re);
		view_btn_tweet3.add(img_view_fa);
		view_btn_tweet3.add(lbl_f);

		view_tweet_3.add(view_btn_tweet1);
		view_tweet_3.add(view_sep_t1);
		view_tweet_3.add(view_btn_tweet2);
		view_tweet_3.add(view_sep_t2);
		view_tweet_3.add(view_btn_tweet3);
		view_tweet.add(view_tweet_1);
		view_tweet.add(view_tweet_2);
		view_tweet.add(view_tweet_3);
		scroll_view.add(view_tweet);
	}
	ventana.add(scroll_view);
	ventana.open();

};
