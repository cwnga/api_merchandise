/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('getinfo-model', function(Y, NAME) {

/**
 * The getinfo-model module.
 *
 * @module getinfo
 */

    /**
     * Constructor for the getInfoModel class.
     *
     * @class getInfoModel
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */

  getData: function(callback) {
       data = { image_data:
          [ { batch_id: '1',
              seq_no: '0',
              profile: 'tw_ec05-7',
              img_url: 'http://nevec-img.zenfs.com/image-int/tw_ec05-7/300da791-56d7-47dc-a07b-b51c58233fe2.jpg',
              w: 559,
              h: 399,
              img_xy: '559x399',
              img_path: 'tw_ec05-7',
              img_file: '300da791-56d7-47dc-a07b-b51c58233fe2',
              status: '1',
              job_id: '1',
              src_url: 'https://nevec.yahoofs.com/image-int/tw_ec05-7/c8d27871-7d6c-4948-a99b-4933112de45d.jpg',
              create_time: 1414991732,
              modify_time: 1414991732,
              auto_expiry: null,
              images: [Object],
              skipCorpping: true } ],
         merchandise_data:
          { mid: '100001681945',
            currency: 'TWD',
            status: 2,
            mtype: 'basic',
            ptime: 1414991730,
            ontime: 1414991733,
            offtime: 1416719728,
            price: '111.00',
            email: null,
            phone: null,
            ym: null,
            sid: '2490',
            images: [ [Object] ],
            cat_attr: null,
            cust_category: [ '1' ],
            cust_data:
             { negativeRating: -10,
               listingDurationDay: '20',
               itemLocation: '16',
               limitRating: '-3',
               privilege: '1',
               maxBuyNum: '99',
               buynum: [Object],
               rebate: [Object],
               SubmitTimeForBilling: 1414991728,
               SubmitCategoryForBilling: '2092064025',
               itemEffectiveTill: 1416719728,
               highestImageCount: 2,
               deviceTypeId: '0',
               txTime: 1414991733 },
            cust_field1: '[]',
            cust_field2: null,
            cust_field3: null,
            cust_field4: null,
            cust_field5: null,
            mtime: 1414991739,
            aid: 'tw_auc_user3#87',
            ctime: 1414991730,
            mass_cust_data: '',
            price_type: 0,
            index_cust_data: null,
            index_cust_field1: '商品簡述',
            index_cust_field2: '1',
            index_cust_field3: null,
            index_cust_field4: '1',
            index_cust_field5: 'tw_auc_user3#87',
            close_scheduler_event: { runid: '9144968', ts: 1416719728 },
            ccode: 'tw',
            remind_close_notify_scheduler_event: null,
            latlong: null,
            img_profile: 'tw_ec05-7',
            duration_day: null,
            offshelve_tod: null,
            timezone: null,
            auto_reshelve_count: null,
            auto_reshelve_allowed: null,
            remind_notify_minute: null,
            shelve_ip: '202.89.121.17',
            property: 'auction2',
            total_auto_reshelve_count: null,
            total_reshelve_count: null,
            orig_status: null,
            orig_offtime: null,
            cancel_time: null,
            delete_time: null,
            page_view: null,
            nogroup: 0,
            verified_user: null,
            page_view_weekly: null,
            category: '2092064025',
            watchlist_weekly: null,
            watchlist: null,
            qna_weekly: null,
            qna: null,
            appointment_weekly: null,
            appointment: null,
            popularity: 0,
            range_data1: 400,
            range_data2: null,
            range_data3: null,
            title: '標題名稱',
            range_data4: null,
            range_data5: null,
            skip_cat_attr: null,
            language: 'zh-hant',
            user_mtime: null,
            inventory: [ [Object] ],
            auto_shelve_type: 'appointment',
            auto_shelve_time: null,
            auto_offshelve_time: 1416719728,
            auto_shelve_scheduler_event: null,
            descs: 'CARGOV2V4-1',
            use_state: '1',
            bid_id: null,
            presale_shipping_type: null,
            presale_shipping_ondate: null,
            presale_shipping_afterdays: null,
            taxonomy_node_id: null,
            cluster_id: null,
            cust_id: null,
            timespan_shelve_time: null,
            auto_timespan_shelve_scheduler_event: null,
            location: '高雄市',
            cst_cancel_remark: null,
            cst_cancel_by: null,
            image_url_type: 'base_image_from_client',
            products: { '4404688': [Object] } },
        meta_data: { seq_id: 'tw1-54570F74:tw1-3' } };
            callback(null, data);
        }

    };

}, '0.0.1', {requires: []});
